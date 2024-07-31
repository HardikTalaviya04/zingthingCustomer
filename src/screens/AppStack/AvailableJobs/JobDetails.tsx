import {
  ActivityIndicator,
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../common/Utils/Colors";
import OnBordingHeader from "../../../common/Components/OnBordingHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREENS } from "../../../common/Utils/screenName";
const { width, height } = Dimensions.get("window");
import DocumentPicker from "react-native-document-picker";
import RNFS from "react-native-fs";



const JobDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { details, fulldetails } = route.params;
  const [BusinessId,SetBusinessId]=useState([])
  console.log("-detatatata-", details);
  const [isLoading,setisLoading]=useState(false)
  const [FinalSubmissionPage, setFinalSubmissionPage] = useState(false);

  // console.log('--busines÷s-id--',)
  // const []


  const pickResume = async () => {
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
        // setdocumentPath(path);
        onSubmitData({FildeData:res[0]});
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
  
  const onSubmitData = async ({FildeData}) => {
    console.log('--Inside-Api-Call--',FildeData)
    try {
      setisLoading(true)
      const formdata = new FormData();
      formdata.append("user_id", 4);
      formdata.append("job_post_id", details.id);
      formdata.append("name", "sample");
      formdata.append("email", "sample@gmail.com");
      formdata.append("mobile_no", "1234567890");
      formdata.append("city", "Delhi");
      formdata.append("job_search_subscription_id", "1");
      formdata.append("message", details.message);
      formdata.append("resume", {
        uri: FildeData.uri,
        type: FildeData.type,
        name: FildeData.name});

      console.log("--deeee--", formdata);
      await fetch(`https://zingthing.ptechwebs.com/api/job-apply-add`, {
        method: "POST",
        headers: {
          'Accept': "application/json,*/*",
          'Content-Type':"multipart/form-data"
        },
      })
        .then((res) => { 
          console.log('--res--',res)
          return res.json()})
        .then((result) => {
          if (result.status == 200) {
      setisLoading(false)
            Alert.alert("Success","Sucessfully applied for the job",
              [
                {
                  text: "OK",
                  onPress: (password) => navigation.navigate(SCREENS.DashBoard),
                },
              ])
            
          } else {
            console.log('--Else-Res--',result)
      setisLoading(false)
            // Alert.alert("Alert", result.message);
          }
        });
    } catch (Err) {
      setisLoading(false)
      console.log(Err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.PrimeryColor,
      }}
    >
      <View>
        <OnBordingHeader label={`JobID #${details.id}`} Back={true} />
      </View>
      <View style={{flex:1}}>

        {!FinalSubmissionPage?(<View
          style={{
            borderRadius: RFValue(4),
            backgroundColor: COLORS.White,
            margin: RFValue(18),
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
              borderRadius: RFValue(4),
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
                {/* <Text
                  style={{
                    color: COLORS.Red,
                    fontWeight: "500",
                    fontSize: RFValue(8),
                    marginTop: RFValue(2),
                  }}
                >
                  Expires in 3 days
                </Text> */}
              </View>
              <Text
                style={{
                  color: COLORS.SkyBlueText,
                  fontWeight: "bold",
                  marginLeft: RFValue(10),
                }}
              >
                {details.id}
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
          <View
            style={{
              padding: RFValue(15),
              height: "88%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Employer Name :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.vendor_name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
                // backgroundColor:'red'
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Job Type :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),

                  width: RFValue(145),
                  // backgroundColor:'yellow'
                }}
              >
                {details.job_type}
              </Text>
            </View>
            {details?.working_time&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Job Time :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.working_time}
              </Text>
            </View>}
            {details?.gender&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Gender :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.gender}
              </Text>
            </View>}
            {details?.line_of_educations.length!=0&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Line of Education Type :
              </Text>
              <View>
                {details.line_of_educations.map((ele) => {
                  return (
                    <Text
                      style={{
                        color: COLORS.Black,
                        fontSize: RFValue(12),
                        width: RFValue(145),
                      }}
                    >
                      {ele.line_of_educations.line_of_education}
                    </Text>
                  );
                })}
              </View>
            </View>}
            {details?.qualification&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Qualification :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.qualification}
              </Text>
            </View>}
            {details?.skills.length!=0&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Additional Skills :
              </Text>
              <View>
                {details?.skills.map((ele) => {
                  return (
                    <Text
                      style={{
                        color: COLORS.Black,
                        fontSize: RFValue(12),
                        width: RFValue(145),
                      }}
                    >
                      {ele.skills.skills}
                    </Text>
                  );
                })}
              </View>
              {/* <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.skill}
              </Text> */}
            </View>}
            {details?.experience&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Work experience :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.experience}
              </Text>
            </View>}
           {details?.quantity&& <View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                No of Vacancies :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.quantity}
              </Text>
            </View>}
            {details?.age_group&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Age Group :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.age_group}
              </Text>
            </View>}
            {details?.environment_to_work&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Work place :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.environment_to_work}
              </Text>
            </View>}
            {details?.salary_range&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Salary Range :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.salary_range}
              </Text>
            </View>}
            {details?.localilty&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Locality :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.localilty}
              </Text>
            </View>}
            {details.facilities.length!=0&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Additional Facility :
              </Text>
              <View>
                {details.facilities.map((ele) => {
                  return (
                    // console.log('--facacaca-',ele)
                    <Text
                      style={{
                        color: COLORS.Black,
                        fontSize: RFValue(12),
                        width: RFValue(145),
                      }}
                    >
                      {ele.facilities.facilities}
                    </Text>
                  );
                })}
              </View>
            </View>}
            {details.business.length!=0&&<View
              style={{
                flexDirection: "row",
                paddingVertical: RFValue(4),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                Business Type :
              </Text>
              <View>
                {details.business.map((ele) => {
                  return (
                    <Text
                      style={{
                        color: COLORS.Black,
                        fontSize: RFValue(12),
                        width: RFValue(145),
                        // backgroundColor:'red'
                      }}
                    >
                      {ele.business.business}
                    </Text>
                  );
                })}
              </View>
              {/* <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),

                }}
              >
                {details.business}
              </Text> */}
            </View>}
            <TouchableOpacity
              onPress={() =>setFinalSubmissionPage(true)}
              style={{
                position: "absolute",
                bottom: -10,
                backgroundColor: COLORS.Orange,
                paddingVertical: 10,
                alignSelf: "center",
                paddingHorizontal: 40,
                borderRadius: 10,
                marginTop: 50,
              }}
            >
              <Text style={{ color: COLORS.White, fontWeight: "600" }}>
                Apply for Job
              </Text>
            </TouchableOpacity>
          </View>
        </View>): (
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.PrimeryColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => pickResume()}
            style={{
              backgroundColor: COLORS.Orange,
              paddingVertical: height * 0.014,
              borderRadius: width * 0.02,
              width: "90%",
              marginTop: 20,
              zIndex: -1,
            }}
          >
            <Text
              style={{
                color: COLORS.White,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Upload Resume
            </Text>
          </TouchableOpacity>
        </View>
      )}
      </View>

      {isLoading&&<View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator color={COLORS.White} size={Dimensions.get('window').width*0.2}/>
      </View>}
    </View>
  );
};

export default JobDetails;

const styles = StyleSheet.create({});
