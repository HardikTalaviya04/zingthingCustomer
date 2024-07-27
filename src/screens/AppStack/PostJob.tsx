import {
  ActivityIndicator,
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../../common/Utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FONTS } from "../../common/Utils/fonts";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import OnBordingHeader from "../../common/Components/OnBordingHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { SCREENS } from "../../common/Utils/screenName";
import RazorpayCheckout from "react-native-razorpay";
import { FlatList } from "react-native";
import moment from "moment";
import DocumentPicker from "react-native-document-picker";
import RNFS from "react-native-fs";

const PostJob = ({ route }) => {
  const navigation = useNavigation();
  const pickerRef = useRef();
  const { NavData } = route.params;
  console.log("---nnaaannaannaa--", NavData ? "HIII" : "BYYEEE");
  const [FinalSubmissionPage, setFinalSubmissionPage] = useState(false);
  const [documentPath, setdocumentPath] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(NavData ? NavData.job_type_id : null);
  const [items, setItems] = useState([]);

  const [JobTitleopen, setJobTitleOpen] = useState(false);
  const [JobTitlevalue, setJobTitleValue] = useState(
    NavData ? NavData.job_title_id : null
  );
  const [JobTitleitems, setJobTitleItems] = useState([]);

  const [Stateopen, setStateOpen] = useState(false);
  const [Statevalue, setStateValue] = useState(
    NavData ? NavData.state_id : null
  );
  const [Stateitems, setStateItems] = useState([]);

  const [Cityopen, setCityOpen] = useState(false);
  const [Cityvalue, setCityValue] = useState(null);
  const [Cityitems, setCityItems] = useState([]);

  // const [JobTitleopen, setJobTitleOpen] = useState(false);
  // const [JobTitlevalue, setJobTitleValue] = useState(
  //   NavData ? NavData.job_title_id : null
  // );
  // const [JobTitleitems, setJobTitleItems] = useState([]);

  const [BusinnesTypeopen, setBusinnesTypeOpen] = useState(false);
  const [BusinnesTypevalue, setBusinnesTypeValue] = useState(null);
  const [BusinnesTypeitems, setBusinnesTypeItems] = useState([]);

  const [WorkingTimeopen, setWorkingTimeOpen] = useState(false);
  const [WorkingTimevalue, setWorkingTimeValue] = useState(
    NavData ? NavData.working_time_id : null
  );
  const [WorkingTimeitems, setWorkingTimeItems] = useState([]);

  const [GenderListopen, setGenderListOpen] = useState(false);
  const [GenderListvalue, setGenderListValue] = useState(
    NavData ? NavData.gender_id : null
  );
  const [GenderListitems, setGenderListItems] = useState([]);

  const [EducationLineopen, setEducationLineOpen] = useState(false);
  const [EducationLinevalue, setEducationLineValue] = useState(null);
  const [EducationLineitems, setEducationLineItems] = useState([]);

  const [Qualificationopen, setQualificationOpen] = useState(false);
  const [Qualificationvalue, setQualificationValue] = useState(
    NavData ? NavData.qualification_id : null
  );
  const [Qualificationitems, setQualificationItems] = useState([]);

  const [AddSkillsopen, setAddSkillsOpen] = useState(false);
  const [AddSkillsvalue, setAddSkillsValue] = useState(null);
  const [AddSkillsitems, setAddSkillsItems] = useState([]);

  const [WorkExperienceopen, setWorkExperienceOpen] = useState(false);
  const [WorkExperiencevalue, setWorkExperienceValue] = useState(
    NavData ? NavData.experience_id : null
  );
  const [WorkExperienceitems, setWorkExperienceItems] = useState([]);

  const [Vaccanciesopen, setVaccanciesOpen] = useState(false);
  const [Vaccanciesvalue, setVaccanciesValue] = useState(
    NavData ? NavData.quantity_id : null
  );
  const [Vaccanciesitems, setVaccanciesItems] = useState([]);

  const [AgeListopen, setAgeListOpen] = useState(false);
  const [AgeListvalue, setAgeListValue] = useState(
    NavData ? NavData.age_group_id : null
  );
  const [AgeListitems, setAgeListItems] = useState([]);

  const [WorkPlaceopen, setWorkPlaceOpen] = useState(false);
  const [WorkPlacevalue, setWorkPlaceValue] = useState(
    NavData ? NavData.environment_to_work_id : null
  );
  const [WorkPlaceitems, setWorkPlaceItems] = useState([]);

  const [SalaryRangeopen, setSalaryRangeOpen] = useState(false);
  const [SalaryRangevalue, setSalaryRangeValue] = useState(
    NavData ? NavData.salary_range_id : null
  );
  const [SalaryRangeitems, setSalaryRangeItems] = useState([]);

  const [Localityopen, setLocalityOpen] = useState(false);
  const [Localityvalue, setLocalityValue] = useState(
    NavData ? NavData.localilty_id : null
  );
  const [Localityitems, setLocalityItems] = useState([]);

  const [AdditionalFacilityopen, setAdditionalFacilityOpen] = useState(false);
  const [AdditionalFacilityvalue, setAdditionalFacilityValue] = useState(null);
  const [AdditionalFacilityitems, setAdditionalFacilityItems] = useState([]);

  const [CandidateMessagevalue, setCandidateMessagevalue] = useState(
    NavData ? NavData?.message : ""
  );

  const [sbscriptionAmount, setSbscriptionAmount] = useState(50);
  const [sbscriptionDayes, setSbscriptionDayes] = useState(10);
  const [sbscriptionInDayes, setSbscriptionInDayes] = useState(10);

  const [isLoading, setisLoading] = useState(false);

  const CheckValidation = () => {
    console.log("AdditionalFacilityvalue", AdditionalFacilityvalue);
    if (value == null) {
      Alert.alert("Please Select Job Type");
      return;
    }
    if (JobTitlevalue == null) {
      Alert.alert("Please Select Job Title");
      return;
    }
    if (value == 2) {
      if (BusinnesTypevalue == null) {
        Alert.alert("Please Select Business Type");
        return;
      }
      if (WorkingTimevalue == null) {
        Alert.alert("Please Select Working Time");
        return;
      }
      if (GenderListvalue == null) {
        Alert.alert("Please Select Gender List");
        return;
      }
      if (EducationLinevalue == null) {
        Alert.alert("Please Select Education Line");
        return;
      }
      if (Qualificationvalue == null) {
        Alert.alert("Please Select Qualification");
        return;
      }
      if (AddSkillsvalue == null) {
        Alert.alert("Please Select Add Skills");
        return;
      }
      if (WorkExperiencevalue == null) {
        Alert.alert("Please Select Work Experience");
        return;
      }
      if (Vaccanciesvalue == null) {
        Alert.alert("Please Select Vaccancies");
        return;
      }
      if (AgeListvalue == null) {
        Alert.alert("Please Select Age List");
        return;
      }
      if (WorkPlacevalue == null) {
        Alert.alert("Please Select Work Place");
        return;
      }
      if (SalaryRangevalue == null) {
        Alert.alert("Please Select Salary Range");
        return;
      }
      if (Localityvalue == null) {
        Alert.alert("Please Select Locality");
        return;
      }

      if (AdditionalFacilityvalue == null) {
        Alert.alert("Please Select Additional Facility");
        return;
      }
      if (Statevalue == null) {
        Alert.alert("Please Select State");
        return;
      }
      if (Cityvalue == null) {
        Alert.alert("Please Select City");
        return;
      }
    }

    handlePayment();
  };
  const handlePayment = () => {
    var options = {
      description: "Credits towards consultation",
      image: "https://zingthing.in/frontend_theme/assets/images/logo.png",
      currency: "INR",
      key: "rzp_test_1Y0isRtUawGbne", // Your api key
      amount: sbscriptionAmount * 100, // Amount in paise
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
        setFinalSubmissionPage(true);
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Something Wen't Wrong`);
      });
  };

  const fetchData = async () => {
    try {
      setisLoading(true);
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/job-type-list"
      );
      const json = await response.json();
      console.log("Cheking  for joob type", json.data);
      const JobType = json.data.map((item: any) => {
        return { label: item?.job_type, value: item?.id };
      });
      setItems(JobType);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }

    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/all-list"
      );
      const json = await response.json();
      const JobTitle = json.data["JobTitle Lists"].map((item: any) => {
        return { label: item?.job_title, value: item?.id };
      });
      setJobTitleItems(JobTitle);
      const BusinessType = json.data["Business Lists"].map((item: any) => {
        return { label: item?.business, value: item?.id };
      });
      setBusinnesTypeItems(BusinessType);
      const WorkingTime = json.data["WorkingTime Lists"].map((item: any) => {
        return { label: item?.working_time, value: item?.id };
      });
      setWorkingTimeItems(WorkingTime);
      const GenderList = json.data["Gender Lists"].map((item: any) => {
        return { label: item?.gender, value: item?.id };
      });
      setGenderListItems(GenderList);
      const LineOfEductaion = json.data["LineOfEducation Lists"].map(
        (item: any) => {
          return { label: item?.line_of_education, value: item?.id };
        }
      );
      setEducationLineItems(LineOfEductaion);
      const QualificationList = json.data["Qualification Lists"].map(
        (item: any) => {
          return { label: item?.qualification, value: item?.id };
        }
      );
      setQualificationItems(QualificationList);
      const AdditionalSkills = json.data["Skills Lists"].map((item: any) => {
        return { label: item?.skills, value: item?.id };
      });
      setAddSkillsItems(AdditionalSkills);
      const Expirence = json.data["Experience Lists"].map((item: any) => {
        return { label: item?.experience, value: item?.id };
      });
      setWorkExperienceItems(Expirence);

      const VaccaniciesList = json.data["Quantity Lists"].map((item: any) => {
        return { label: item?.quantity, value: item?.id };
      });
      setVaccanciesItems(VaccaniciesList);

      const AgeGroup = json.data["AgeGroup Lists"].map((item: any) => {
        return { label: item?.age_group, value: item?.id };
      });
      setAgeListItems(AgeGroup);

      const WorkPlace = json.data["EnvironmentToWork Lists"].map(
        (item: any) => {
          return { label: item?.environment_to_work_with, value: item?.id };
        }
      );
      setWorkPlaceItems(WorkPlace);

      const SalaryRange = json.data["SalaryRange Lists"].map((item: any) => {
        return { label: item?.salary_range, value: item?.id };
      });
      setSalaryRangeItems(SalaryRange);

      const Locality = json.data["Localilty Lists"].map((item: any) => {
        return { label: item?.localilty, value: item?.id };
      });
      setLocalityItems(Locality);

      const AdditionalFacility = json.data["Facilities Lists"].map(
        (item: any) => {
          return { label: item?.facilities, value: item?.id };
        }
      );
      setAdditionalFacilityItems(AdditionalFacility);
      // console.log("object", newData)
      // setMainData(json.data);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }

    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/job-post-subscription-list"
      );
      const json = await response.json();
      console.log("HARDIK HARDIK", json.data);
      setSbscriptionAmount(json.data[0].job_post_rupees);
      const expirationDate = moment(moment().format("YYYY-MM-DD")).add(
        Number(json.data[0].job_post_days),
        "days"
      );
      console.log("object", moment(expirationDate).format("DD-MM-YYYY"));
      setSbscriptionDayes(moment(expirationDate).format("DD-MM-YYYY"));
      setSbscriptionInDayes(json.data[0].job_post_days);
      // setisLoading(false);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }

    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/state-list"
      );
      const json = await response.json();
      const JobTitle = json.data.map((item: any) => {
        return { label: item?.state_name, value: item?.id };
      });
      setStateItems(JobTitle);
      setisLoading(false);

      // console.log("HARDIK HARDIK", json.data);
      // setSbscriptionAmount(json.data[0].job_post_rupees);
      // const expirationDate = moment(moment().format("YYYY-MM-DD")).add(
      //   Number(json.data[0].job_post_days),
      //   "days"
      // );
      // console.log("object", moment(expirationDate).format("DD-MM-YYYY"));
      // setSbscriptionDayes(moment(expirationDate).format("DD-MM-YYYY"));
      // setSbscriptionInDayes(json.data[0].job_post_days);
      // setisLoading(false);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const LineOfEd = NavData?.line_of_educations.map((ele) => {
        return ele.line_of_educations_id;
      });
      setEducationLineValue(LineOfEd);

      const AddSkills = NavData?.skills?.map((ele) => {
        return ele.skill_id;
      });
      setAddSkillsValue(AddSkills);

      const Faclities = NavData?.facilities?.map((ele) => {
        return ele.facilities_id;
      });
      setAdditionalFacilityValue(Faclities);

      const CityName = NavData?.city?.map((ele) => {
        return ele.city_id;
      });
      setCityValue(CityName);

      const Businessid = NavData?.business?.map((ele) => {
        return ele.business_id;
      });
      // console.log("--id-navdata--", AddSkills, Businessid, Faclities);
      setBusinnesTypeValue(Businessid);
    }, [NavData])
  );

  useEffect(() => {
    fetchData();
  }, []);

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
        setdocumentPath(path);
        onSubmit(res[0]);
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

  const onSubmit = async (FileData) => {
    try {
      setisLoading(true);
      console.log("--FILE_DATA--", FileData);
      const data = new FormData();
      data.append("job_post_date", moment().format("YYYY-MM-DD"));
      data.append("candidate_id", "3");
      data.append("job_title_id", JobTitlevalue);
      data.append(
        "business_ids",
        BusinnesTypevalue
          ? Array.isArray(BusinnesTypevalue)
            ? BusinnesTypevalue.join(",")
            : BusinnesTypevalue
          : ""
      );
      data.append("working_time_id", WorkingTimevalue ? WorkingTimevalue : "");
      data.append("gender_id", GenderListvalue ? GenderListvalue : "");
      data.append(
        "line_of_educations_ids",
        EducationLinevalue
          ? Array.isArray(EducationLinevalue)
            ? EducationLinevalue.join(",")
            : EducationLinevalue
          : ""
      );
      data.append(
        "qualification_id",
        Qualificationvalue ? Qualificationvalue : ""
      );
      data.append(
        "skills_ids",
        AddSkillsvalue
          ? Array.isArray(AddSkillsvalue)
            ? AddSkillsvalue.join(",")
            : AddSkillsvalue
          : ""
      );
      data.append(
        "experience_id",
        WorkExperiencevalue ? WorkExperiencevalue : ""
      );
      data.append("quantity_id", Vaccanciesvalue ? Vaccanciesvalue : "");
      data.append("age_group_id", AgeListvalue ? AgeListvalue : "");
      data.append("localilty_id", Localityvalue ? Localityvalue : "");
      data.append(
        "environment_to_work_id",
        WorkPlacevalue ? WorkPlacevalue : ""
      );
      data.append("place_of_posting", "Ahmedabad");
      data.append("salary_range_id", SalaryRangevalue ? SalaryRangevalue : "");
      data.append(
        "facility_ids",
        AdditionalFacilityvalue
          ? Array.isArray(AdditionalFacilityvalue)
            ? AdditionalFacilityvalue.join(",")
            : AdditionalFacilityvalue
          : ""
      );
      data.append("job_type_id", value ? value : "");
      data.append("job_post_subscription_id", "1");
      data.append("message", CandidateMessagevalue);
      data.append("job_search_subscription_id", "1");
      data.append("state_id", Statevalue);
      data.append(
        "city_ids",
        Cityvalue
          ? Array.isArray(Cityvalue)
            ? Cityvalue.join(",")
            : Cityvalue
          : ""
      );
      data.append("resume", {
        uri: FileData.uri,
        type: FileData.type,
        name: FileData.name,
        // fileName: Image1.type == "application/pdf" ? 'application/pdf' : 'image'
      });

      console.log("--formdata--", data);
      const response = await fetch(
        NavData
          ? `https://zingthing.ptechwebs.com/api/jobpost-search-update/${NavData.id}?_method=PUT`
          : "https://zingthing.ptechwebs.com/api/jobpost-search-add",
        {
          method: "POST",
          headers: {
            Accept: "application/json,*/*",
            "Content-Type": "multipart/form-data",
          },
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setisLoading(false);
      console.log(json);
      Alert.alert(
        "CONGRATULATIONS",
        `YOUR REQUEST FOR JOB POST WITH NUMBER ${json.data.job_post_search_id} IS POSTED SUCCESSFULLY AND YOU WILL RECEIVE THE UPDATE NOTIFICATION IN CASE ANY CANDIDATE FITS YOUR JOB POST. YOUR JOB POST WILL REMAIN LIVE TILL ${sbscriptionDayes}. FOR ANY FURTHER ASSISTANCE, PLEASE CONTACT US ON 9723233194 / 9737333194 / 9824333194 / 9979333194 WITH YOUR JOB POST NUMBER.`,
        [
          {
            text: "OK",
            onPress: (password) => navigation.navigate(SCREENS.DashBoard),
          },
        ]
      );
    } catch (err: any) {
      setisLoading(false);
      console.log("--Errorrorr--", err);
      // Alert.alert(err);
    }
  };
  const setDropdownOpenFunction = (index) => {
    setOpen(index == 0 ? !open : false);
    setJobTitleOpen(index == 1 ? !JobTitleopen : false);
    setBusinnesTypeOpen(index == 2 ? !BusinnesTypeopen : false);
    setWorkingTimeOpen(index == 3 ? !WorkingTimeopen : false);
    setGenderListOpen(index == 4 ? !GenderListopen : false);
    setEducationLineOpen(index == 5 ? !EducationLineopen : false);
    setQualificationOpen(index == 6 ? !Qualificationopen : false);
    setAddSkillsOpen(index == 7 ? !AddSkillsopen : false);
    setWorkExperienceOpen(index == 8 ? !WorkExperienceopen : false);
    setVaccanciesOpen(index == 9 ? !Vaccanciesopen : false);
    setAgeListOpen(index == 10 ? !AgeListopen : false);
    setWorkPlaceOpen(index == 11 ? !WorkPlaceopen : false);
    setSalaryRangeOpen(index == 12 ? !SalaryRangeopen : false);
    setLocalityOpen(index == 13 ? !Localityopen : false);
    setAdditionalFacilityOpen(index == 14 ? !AdditionalFacilityopen : false);
    setStateOpen(index == 15 ? !Stateopen : false);
    setCityOpen(index == 16 ? !Cityopen : false);
  };

  const GetCityValue = async ({ id }) => {
    try {
      console.log("--cccc--city---,", id);
      setisLoading(true);
      const response = await fetch(
        `https://zingthing.ptechwebs.com/api/city/${id}`
      );
      const json = await response.json();
      const JobTitle = json.data.map((item: any) => {
        return { label: item?.city_name, value: item?.id };
      });
      setisLoading(false);
      setCityItems(JobTitle);
    } catch (Err) {
      setisLoading(false);

      console.log("--Error-City-List--", Err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EFFDFD",
        justifyContent: "center",
      }}
    >
      <OnBordingHeader
        label={NavData ? `Update Job Search #${NavData.id}` : "Find a Job"}
        Back={true}
      />
      {!FinalSubmissionPage ? (
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          // keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: RFValue(40),
            backgroundColor: COLORS.White,
            paddingVertical: width * 0.034,
            marginVertical: width * 0.04,
            marginHorizontal: RFValue(12),
            paddingHorizontal: width * 0.04,
            borderRadius: 4,
          }}
        >
          <Text
            style={{
              color: COLORS.TextBlack,
              fontWeight: "600",
            }}
          >
            Job Type * :{" "}
          </Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            scrollViewProps={{ nestedScrollEnabled: true }}
            open={open}
            value={value}
            placeholder="Select Job Type (Select Only One)"
            placeholderStyle={{
              color: COLORS.SperatorColor,
              fontWeight: "500",
            }}
            items={items}
            dropDownDirection="BOTTOM"
            setOpen={() => setDropdownOpenFunction(0)}
            setValue={setValue}
            listItemLabelStyle={{
              color: COLORS.Black,
              backgroundColor: COLORS.White,
            }}
            style={{
              marginVertical: width * 0.02,
              borderWidth: 0,
              elevation: 4,
              zIndex: 1000,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            setItems={setItems}
          />
          <Text
            style={{
              color: COLORS.TextBlack,
              marginTop: RFValue(10),
              fontWeight: "600",
            }}
          >
            Job Title :
          </Text>
          <DropDownPicker
            open={JobTitleopen}
            listMode="SCROLLVIEW"
            scrollViewProps={{ nestedScrollEnabled: true }}
            placeholder="Select Job Title (Select Only One)"
            placeholderStyle={{
              color: COLORS.SperatorColor,
              fontWeight: "500",
            }}
            value={JobTitlevalue}
            items={JobTitleitems}
            setOpen={() => setDropdownOpenFunction(1)}
            setValue={setJobTitleValue}
            listItemLabelStyle={{
              color: COLORS.Black,
              backgroundColor: COLORS.White,
            }}
            style={{
              marginVertical: width * 0.02,
              borderWidth: 0,
              elevation: 4,
              zIndex: 999,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            setItems={setItems}
          />

          <Text
            style={{
              color: COLORS.TextBlack,
              marginTop: RFValue(10),
              fontWeight: "600",
            }}
          >
            State :
          </Text>
          <DropDownPicker
            open={Stateopen}
            listMode="SCROLLVIEW"
            searchable
            scrollViewProps={{ nestedScrollEnabled: true }}
            placeholder="Select State (Select Only One)"
            placeholderStyle={{
              color: COLORS.SperatorColor,
              fontWeight: "500",
            }}
            value={Statevalue}
            onPress={() => {
              setCityValue(null);
            }}
            onChangeValue={(val) => {
              console.log("----", val);
              GetCityValue({ id: val });
            }}
            items={Stateitems}
            setOpen={() => setDropdownOpenFunction(15)}
            setValue={setStateValue}
            listItemLabelStyle={{
              color: COLORS.Black,
              backgroundColor: COLORS.White,
            }}
            style={{
              marginVertical: width * 0.02,
              borderWidth: 0,
              elevation: 4,
              zIndex: 999,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            setItems={setStateItems}
          />

          <Text
            style={{
              color: COLORS.TextBlack,
              marginTop: RFValue(10),
              fontWeight: "600",
            }}
          >
            City :
          </Text>
          <DropDownPicker
            open={Cityopen}
            multiple
            listMode="SCROLLVIEW"
            scrollViewProps={{ nestedScrollEnabled: true }}
            placeholder="Select City (Multiple)"
            placeholderStyle={{
              color: COLORS.SperatorColor,
              fontWeight: "500",
            }}
            value={Cityvalue}
            items={Cityitems}
            setOpen={() => setDropdownOpenFunction(16)}
            setValue={setCityValue}
            listItemLabelStyle={{
              color: COLORS.Black,
              backgroundColor: COLORS.White,
            }}
            style={{
              marginVertical: width * 0.02,
              borderWidth: 0,
              elevation: 4,
              zIndex: 999,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            setItems={setCityItems}
          />

          <FlatList
            data={[1]}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) =>
              Cityvalue != null ? (
                typeof Cityvalue == "number" ? (
                  <Text style={styles.itemText}>
                    {Cityitems[Cityvalue - 1].label},{" "}
                  </Text>
                ) : (
                  Cityvalue.map((items, indexx) => (
                    <Text style={styles.itemText}>
                      {Cityitems?.[items - 1]?.label},{" "}
                    </Text>
                  ))
                )
              ) : null
            }
          />
          {value == 2 && (
            <>
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Business Type :
              </Text>
              <DropDownPicker
                max={5}
                multiple={true}
                searchable={true}
                searchTextInputProps={{ placeholder: "Search" }}
                onSelectItem={(i) =>
                  i.length == 5 && setBusinnesTypeOpen(false)
                }
                listMode="MODAL"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={BusinnesTypeopen}
                placeholder="Select Business Type ( Max 5)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                value={BusinnesTypevalue}
                items={BusinnesTypeitems}
                setOpen={() => setDropdownOpenFunction(2)}
                setValue={setBusinnesTypeValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 998,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />

              <FlatList
                data={[1]}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  BusinnesTypevalue != null ? (
                    typeof BusinnesTypevalue == "number" ? (
                      <Text style={styles.itemText}>
                        {BusinnesTypeitems[BusinnesTypevalue - 1].label},{" "}
                      </Text>
                    ) : (
                      BusinnesTypevalue.map((items, indexx) => (
                        <Text style={styles.itemText}>
                          {BusinnesTypeitems?.[items - 1]?.label},{" "}
                        </Text>
                      ))
                    )
                  ) : null
                }
              />
              {/* <FlatList
                data={[1]}
                scrollEnabled={false}
                style={{ flexWrap: "wrap", marginTop: RFValue(5) }}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  BusinnesTypevalue != null ? (
                    typeof BusinnesTypevalue == "number" ? (
                      <Text style={styles.itemText}>
                        {BusinnesTypeitems[BusinnesTypevalue - 5].label}
                      </Text>
                    ) : (
                      BusinnesTypevalue.map((items, indexx) => (
                        <Text style={{ maxHeight: RFValue(250) }}>
                          {BusinnesTypeitems?.[items - 5]?.label}
                        </Text>
                      ))
                    )
                  ) : null
                }
              /> */}
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Job Time/Working Time :
              </Text>
              <DropDownPicker
                // multiple={true}
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={WorkingTimeopen}
                value={WorkingTimevalue}
                placeholder="Select Time (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                items={WorkingTimeitems}
                setOpen={() => setDropdownOpenFunction(3)}
                setValue={setWorkingTimeValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 997,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              {/* <FlatList
                data={[1]}
                horizontal={true}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  WorkingTimevalue != null ? (
                    typeof WorkingTimevalue == "number" ? (
                      <Text style={styles.itemText}>
                        {WorkingTimeitems[WorkingTimevalue - 1].label},{" "}
                      </Text>
                    ) : (
                      WorkingTimevalue.map((items, indexx) => (
                        <Text style={styles.itemText}>
                          {WorkingTimeitems?.[items - 1]?.label},{" "}
                        </Text>
                      ))
                    )
                  ) : null
                }
              /> */}
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Gender :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={GenderListopen}
                value={GenderListvalue}
                items={GenderListitems}
                setOpen={() => setDropdownOpenFunction(4)}
                placeholder="Select Gender (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setValue={setGenderListValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 996,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />

              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Line of Education :
              </Text>
              <DropDownPicker
                max={3}
                multiple={true}
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={EducationLineopen}
                value={EducationLinevalue}
                dropDownDirection="BOTTOM"
                placeholder="Select Education ( Max 3)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                items={EducationLineitems}
                setOpen={() => setDropdownOpenFunction(5)}
                setValue={setEducationLineValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 995,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
              />
              <FlatList
                data={[1]}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  EducationLinevalue != null ? (
                    typeof EducationLinevalue == "number" ? (
                      <Text style={styles.itemText}>
                        {EducationLineitems[EducationLinevalue - 1].label},{" "}
                      </Text>
                    ) : (
                      EducationLinevalue.map((items, indexx) => (
                        <Text style={styles.itemText}>
                          {EducationLineitems?.[items - 1]?.label},{" "}
                        </Text>
                      ))
                    )
                  ) : null
                }
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Qualification :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={Qualificationopen}
                value={Qualificationvalue}
                items={Qualificationitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Qualification (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(6)}
                setValue={setQualificationValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 994,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Additional Skills :
              </Text>
              <DropDownPicker
                max={3}
                multiple={true}
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={AddSkillsopen}
                value={AddSkillsvalue}
                items={AddSkillsitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Skills ( Max 3)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(7)}
                setValue={setAddSkillsValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 993,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <FlatList
                data={[1]}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  AddSkillsvalue != null ? (
                    typeof AddSkillsvalue == "number" ? (
                      <Text style={styles.itemText}>
                        {AddSkillsitems[AddSkillsvalue - 1].label},{" "}
                      </Text>
                    ) : (
                      AddSkillsvalue.map((items, indexx) => (
                        <Text style={styles.itemText}>
                          {AddSkillsitems?.[items - 1]?.label},{" "}
                        </Text>
                      ))
                    )
                  ) : null
                }
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Work Experience Years :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={WorkExperienceopen}
                value={WorkExperiencevalue}
                items={WorkExperienceitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Experience (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(8)}
                setValue={setWorkExperienceValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 992,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                NO. of Vacancies :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={Vaccanciesopen}
                value={Vaccanciesvalue}
                items={Vaccanciesitems}
                dropDownDirection="BOTTOM"
                placeholder="10 (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(9)}
                setValue={setVaccanciesValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 991,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Age Group :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={AgeListopen}
                value={AgeListvalue}
                items={AgeListitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Age Group (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(10)}
                setValue={setAgeListValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 990,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Work Place :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={WorkPlaceopen}
                value={WorkPlacevalue}
                items={WorkPlaceitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Work Place (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(11)}
                setValue={setWorkPlaceValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 989,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Salary Range :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={SalaryRangeopen}
                value={SalaryRangevalue}
                items={SalaryRangeitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Range (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(12)}
                setValue={setSalaryRangeValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 988,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Locality :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                open={Localityopen}
                value={Localityvalue}
                items={Localityitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Locality (Select Only One)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(13)}
                setValue={setLocalityValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 987,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />
              <Text
                style={{
                  color: COLORS.TextBlack,
                  marginTop: RFValue(10),
                  fontWeight: "600",
                }}
              >
                Additional Facilities :
              </Text>
              <DropDownPicker
                listMode="SCROLLVIEW"
                scrollViewProps={{ nestedScrollEnabled: true }}
                multiple={true}
                open={AdditionalFacilityopen}
                value={AdditionalFacilityvalue}
                items={AdditionalFacilityitems}
                dropDownDirection="BOTTOM"
                placeholder="Select Additional Facilites (Multiple Allowed)"
                placeholderStyle={{
                  color: COLORS.SperatorColor,
                  fontWeight: "500",
                }}
                setOpen={() => setDropdownOpenFunction(14)}
                setValue={setAdditionalFacilityValue}
                listItemLabelStyle={{ color: COLORS.Black }}
                style={{
                  marginVertical: width * 0.02,
                  borderWidth: 0,
                  elevation: 4,
                  zIndex: 986,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                setItems={setItems}
              />

              <FlatList
                data={[1]}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  AdditionalFacilityvalue != null ? (
                    typeof AdditionalFacilityvalue == "number" ? (
                      <Text style={styles.itemText}>
                        {
                          AdditionalFacilityitems[AdditionalFacilityvalue - 1]
                            .label
                        }
                        ,{" "}
                      </Text>
                    ) : (
                      AdditionalFacilityvalue.map((items, indexx) => (
                        <Text style={styles.itemText}>
                          {AdditionalFacilityitems?.[items - 1]?.label},{" "}
                        </Text>
                      ))
                    )
                  ) : null
                }
              />
              {/* <FlatList
                data={[1]}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) =>
                  AdditionalFacilityvalue != null ? (
                    typeof AdditionalFacilityvalue == "number" ? (
                      <Text style={styles.itemText}>
                        {
                          AdditionalFacilityitems[AdditionalFacilityvalue - 4]
                            .label
                        }
                        ,{" "}
                      </Text>
                    ) : (
                      AdditionalFacilityvalue.map((items, indexx) => (
                        <Text style={styles.itemText}>
                          {AdditionalFacilityitems?.[items - 4]?.label},{" "}
                        </Text>
                      ))
                    )
                  ) : null
                }
              /> */}
            </>
          )}
          <Text
            style={{
              color: COLORS.TextBlack,
              marginTop: RFValue(10),
              fontWeight: "600",
            }}
          >
            Additonal Message :
          </Text>
          <TextInput
            value={CandidateMessagevalue}
            onChangeText={(text) => setCandidateMessagevalue(text)}
            placeholderTextColor={COLORS.SperatorColor}
            textAlignVertical="top"
            style={{
              width: "100%",
              height: RFValue(130),
              marginVertical: width * 0.02,
              borderWidth: 1,
              borderColor: COLORS.SperatorColor,
              borderRadius: 8,
              zIndex: 985,
              padding: RFValue(8),
              color: COLORS.Black,
            }}
            placeholder="Enter Candidate Message"
          />
          <Text
            style={{
              color: COLORS.TextBlack,
              marginTop: RFValue(6),
              fontSize: RFValue(10),
              textAlign: "left",
            }}
          >
            {`On Posting Job Search/Service Search and on making Payment, you agree to our terms and conditions to get the notifications for the best match available in our database. Your post will remain live for 15 days and you will receive the notifications for the employer/service provider available in our database. By sending notifications for the match as per your requirements, we are exchanging the data only and we do not undertake any responsibility of quality the work/service the employer/service provider will give. We advise you to verify the match before you work with them`}
          </Text>
          <TouchableOpacity
            onPress={() => CheckValidation()}
            style={{
              backgroundColor: COLORS.Orange,
              paddingVertical: height * 0.014,
              borderRadius: width * 0.02,
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
              {NavData
                ? "Pay & update job search"
                : "Pay and proceed to job search"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
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

      {isLoading && (
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <ActivityIndicator
            color={COLORS.White}
            size={Dimensions.get("window").width * 0.2}
          />
        </View>
      )}
    </View>
  );
};

export default PostJob;

const styles = StyleSheet.create({
  dropDownContainerStyle: {
    zIndex: 1000, // Ensures dropdown is above other elements
  },
});
