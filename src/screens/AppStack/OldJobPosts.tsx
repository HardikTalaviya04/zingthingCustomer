import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  Settings,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../common/Utils/Colors";
import AuthHeader from "../../common/Components/AuthHeader";
import OnBordingHeader from "../../common/Components/OnBordingHeader";
import { IMAGE } from "../../common/Utils/image";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "../../common/Utils/fonts";
import DocumentPicker from "react-native-document-picker";
import RNFS from "react-native-fs";
import DownloadFile from "../../common/Components/DownloadFile";
import RazorpayCheckout from "react-native-razorpay";
import RNFetchBlob from "rn-fetch-blob";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { Linking } from "react-native";
import { SCREENS } from "../../common/Utils/screenName";
import { useNavigation } from "@react-navigation/native";

export default function OldJobPosts() {
  const [screenState, setscreenState] = useState(0);
  const [documentPath, setdocumentPath] = useState("");
  const [CheckIndex, SetCheckIndex] = useState([]);
  const [mainData, setMainData] = useState([]);
  const ScreenHeight = Dimensions.get("screen").height;
  const ScreenWidth = Dimensions.get("screen").width;

  const navigation = useNavigation();

  const handlePayment = () => {
    var options = {
      description: "Credits towards consultation",
      image: "https://zingthing.in/frontend_theme/assets/images/logo.png",
      currency: "INR",
      key: "rzp_test_1Y0isRtUawGbne", // Your api key
      amount: 100, // Amount in paise
      name: "ZingThing",
      prefill: {
        email: "example@razorpay.com",
        contact: "1234567890",
        name: "Razorpay User",
      },
      theme: { color: COLORS.PrimeryColor },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
        pickDocument();
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Something Wen't Wrong`);
      });
  };

  const requestStoragePermission = async () => {
    if (Platform.OS === "android") {
      const status = await check();
      console.log(status);
      if (status === RESULTS.GRANTED) {
        return true;
      }

      const result = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      console.log(result);
      if (result === RESULTS.GRANTED) {
        return true;
      }

      Alert.alert(
        "Permission Required",
        "Storage permission is required to download files. Please grant the permission in the app settings.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() },
        ]
      );
      return false;
    }
    return true; // iOS doesn't require explicit storage permission for downloads.
  };
  const DownloadFileFunction = async ({ FileUrl }) => {
    if (Platform.OS === "android") {
      const granted = await requestStoragePermission();
      if (!granted) {
        return;
      }
    }

    // setIsDownloading(true);

    const { config, fs } = RNFetchBlob;
    const downloads = fs.dirs.DownloadDir;
    const fileName = "sample.pdf";

    config({
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${downloads}/${fileName}`,
        description: "Downloading PDF file",
      },
    })
      .fetch("GET", FileUrl)
      .then((res) => {
        Alert.alert("Download Success", "PDF file downloaded successfully.");
        // setIsDownloading(false);
      })
      .catch((errorMessage, statusCode) => {
        Alert.alert("Download Failed", "Failed to download PDF file.");
        // setIsDownloading(false);
      });
  };

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.doc,
          DocumentPicker.types.docx,
        ],
      });
      // setResumeData(res);
      if (res && res[0].uri) {
        const path = await copyDocumentToAppDirectory(res[0]);
        console.log("--object--", res, path);
        setdocumentPath(path);
        postData(res[0], path);
      } else {
        Alert.alert("Error", "Selected document URI is undefined");
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log("User cancelled document picker");
      } else {
        Alert.alert("Error", "Something went wrong while picking the document");
        console.log(err);
      }
    }
  };

  const copyDocumentToAppDirectory = async (document) => {
    document;
    const fileName = document.name;
    const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    try {
      await RNFS.copyFile(document.uri, destPath);
      return destPath;
    } catch (error) {
      console.error("Error copying document to app directory", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/job-apply-list"
      );
      const json = await response.json();
      json.data.map((ele)=>{
        setMainData(ele.job_posts);
        // SetmainFullDetails(ele)
        console.log("-fetch data-",ele.job_posts );
      })
      
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postData = async (data, path) => {
    try {
      const Fdata = new FormData();
      Fdata.append("document", {
        uri: data.uri,
        type: data.type,
        name: data.name,
      });
      Fdata.append("vendor_id", "1");
      Fdata.append("create_date", "15/06/2024");
      Fdata.append("expire_date", "16/06/2024");
      Fdata.append("paid", "Yes");
      console.log("hardik", data.uri, data.type, data.name, Fdata);

      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/newsfeeds-add",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: Fdata,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log("hardik", json);
      fetchData();
      setscreenState(1);
      // setResponseMessage(json.message);
      Alert.alert("Success", "Data posted successfully");
    } catch (error) {
      console.log("--error--", error);
      // setResponseMessage(error.message);
      Alert.alert("Error", JSON.stringify(error));
    }
  };

  const renderItem = ({ item, index }) => {
    // const Views = item.user;
    // const arrayLength = Views.length;
    // console.log(arrayLength);
    console.log('--ii--',item);
    return (
      // item.map((ele)=>{
      //   return(
      <View
      style={{
        borderRadius: RFValue(2),
        backgroundColor: COLORS.White,
        marginTop: RFValue(15),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(10),
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.DarkPrimeryColor,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={{ color: COLORS.Orange, fontWeight: "bold" }}>
            Job Post Id
          </Text>
          <Text
            style={{
              color: COLORS.Red,
              fontWeight: "500",
              fontSize: RFValue(8),
              marginTop: RFValue(2),
            }}
          >
            Expires in 3 days
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.SkyBlueText,
            fontWeight: "bold",
            marginLeft: RFValue(10),
          }}
        >
          {item.id}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.ButtonPurpal,
          paddingHorizontal: 8,
          paddingVertical: RFValue(4),
          borderRadius: RFValue(4),
        }}
      >
        <Text style={{ fontSize: RFValue(10), color: COLORS.White }}>
          Posted Recently
        </Text>
      </View>
    </View>
        <View style={{ padding: RFValue(15) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}
            >
              Job Title :
            </Text>
            <Text
            
            style={{
              color: COLORS.Black,
              fontSize: RFValue(9),
              width: RFValue(170),
            }}
            >
              {item.job_title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFValue(10),
            }}
          >
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}
            >
              Job Type :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(9),
                width: RFValue(170),
              }}
            >
              {item.job_type}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFValue(10),
            }}
          >
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}
            >
              Salary :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(9),
                width: RFValue(170),
                fontWeight: "bold",
              }}
            >
              {item.salary_range}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFValue(10),
            }}
          >
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}
            >
              Job Posted Date :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(9),
              }}
            >
              {item.job_post_date}
            </Text>
          </View>
        </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => SetCheckIndex(index)}
            activeOpacity={0.5}
            style={{
              height: RFValue(15),
              width: RFValue(15),
              backgroundColor: COLORS.SperatorColor,
              borderRadius: RFValue(2),
              marginRight: RFValue(4),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {index == CheckIndex && (
              <View
                style={{
                  alignSelf: "center",
                  height: RFValue(8),
                  width: RFValue(8),
                  borderRadius: RFValue(8),
                  backgroundColor: COLORS.Orange,
                }}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.Black,
              fontSize: RFValue(10),
            }}
          >
            Notification Enabled
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREENS.PostJob, {
              screenstate: "OldJobPost",
            })
          }
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.Orange,
              fontSize: RFValue(10),
              textAlign: "center",
              marginTop: RFValue(3),
            }}
          >
            Edit Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
        // )
      // })
    );
  };

  return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={"Old Job searches"} Back={true} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: RFValue(15),
        }}
      >
        <FlatList
          contentContainerStyle={{ marginTop: RFValue(15) }}
          showsVerticalScrollIndicator={false}
          data={mainData}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: COLORS.PrimeryColor,
  },
});
