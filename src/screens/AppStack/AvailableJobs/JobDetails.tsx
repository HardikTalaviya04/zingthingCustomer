import {
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
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../common/Utils/screenName";
const { width, height } = Dimensions.get("window");
const JobDetails = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.PrimeryColor,
      }}
    >
      <View>
        <OnBordingHeader label={"JobID #Job 123"} Back={true} />
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
                #Job123
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
          <View style={{ padding: RFValue(15), height: "88%" }}>
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
                }}
              >
                sample
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
                Job Type :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                Software Developer
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
                }}
              >
                9 - 5
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
                }}
              >
                any
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
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                CS
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
                Qualification :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                CS
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
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                React
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
                Work experience :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                10+ yr
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
                }}
              >
                10
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
                }}
              >
                20 - 40 yrs
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
                }}
              >
                Office
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
                }}
              >
                25,000 +
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
                }}
              >
                Local
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
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                PF , Bonus
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
                Business Type :
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontSize: RFValue(12),
                }}
              >
                Tech
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.DashBoard)}
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
