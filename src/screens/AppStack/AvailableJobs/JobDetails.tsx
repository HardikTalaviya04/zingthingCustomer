import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../../common/Utils/Colors";
import OnBordingHeader from "../../../common/Components/OnBordingHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREENS } from "../../../common/Utils/screenName";
const { width, height } = Dimensions.get("window");
const JobDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { details, fulldetails } = route.params;
  console.log("-detatatata-", details);
  // const []

  const onSubmitData = async () => {
    try {
      const formdata = new FormData();
      formdata.append("user_id", 3);
      formdata.append("job_post_id", details.job_title_id);
      formdata.append("business_category_id", details.job_type_id);
      formdata.append("name", details.business_id);
      formdata.append("working_time_id", details.working_time_id);
      formdata.append("gender_id", details.gender_id);
      formdata.append("line_of_educations_ids", fulldetails.city);
      formdata.append("qualification_id", details.qualification_id);
      formdata.append("skill_id", details.skill_id);
      formdata.append("experience_id", details.experience_id);
      formdata.append("quantity_id", details.quantity_id);
      formdata.append("age_group_id", details.age_group_id);
      formdata.append("localilty_id", details.localilty_id);
      formdata.append("environment_to_work_id", details.environment_to_work_id);
      formdata.append("place_of_posting", details.place_of_posting);
      formdata.append("salary_range_id", details.salary_range_id);
      formdata.append("facility_ids", details.facilities);
      formdata.append("message", details.message);
      formdata.append("resume", details.resume);

      console.log("--deeee--", formdata);
      await fetch(`https://zingthing.ptechwebs.com/api/job-apply-add`, {
        method: "POST",
        headers: {
          Accept: "application/json,*/*",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status == 200) {
            navigation.navigate(SCREENS.DashBoard);
          } else {
            Alert.alert("Alert", result.message);
          }
        });
    } catch (Err) {
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
      <View>
        <View
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
                {details.candidate_name}
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
            </View>
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
            </View>
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
            </View>
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
            </View>
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
                Additional Skills :
              </Text>
              {/* <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                  width: RFValue(145),
                }}
              >
                {details.skill}
              </Text> */}
            </View>
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
            </View>
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
            </View>
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
            </View>
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
            </View>
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
            </View>
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
            </View>
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
            </View>
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
            </View>
            <TouchableOpacity
              onPress={() => onSubmitData()}
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
        </View>
      </View>
    </View>
  );
};

export default JobDetails;

const styles = StyleSheet.create({});
