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
const { width, height } = Dimensions.get("window");
const JobDetails = () => {
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
          borderRadius: RFValue(2),
          backgroundColor: COLORS.White,
          marginTop: RFValue(15),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: RFValue(15),
            paddingVertical: RFValue(10),
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: COLORS.DarkPrimeryColor,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={{color: COLORS.Orange, fontWeight: 'bold'}}>
                Job Post Id
              </Text>
              <Text
                style={{
                  color: COLORS.Red,
                  fontWeight: '500',
                  fontSize: RFValue(8),
                  marginTop: RFValue(2),
                }}>
                Expires in 3 days
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.SkyBlueText,
                fontWeight: 'bold',
                marginLeft: RFValue(10),
              }}>
              #Job1
            </Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.ButtonPurpal,
              paddingHorizontal: 8,
              paddingVertical: RFValue(4),
              borderRadius: RFValue(4),
            }}>
            <Text style={{fontSize: RFValue(10), color: COLORS.White}}>
              Posted Recently
            </Text>
          </View>
        </View>
        <View style={{padding: RFValue(15)}}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Employer Name :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              sample
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Job Type :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              Software Developer
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Job Time :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              9 - 5
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Gender :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              any
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Line of Education Type :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              CS
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Qualification :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              CS
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Additional Skills :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              React
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Work experience :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              10+ yr
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              No of Vacancies :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              10
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Age Group :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              20 - 40 yrs
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Work place :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              Office
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Salary Range :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              25,000 +
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Locality :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              Local
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Additional Facility :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              PF , Bonus
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: RFValue(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
                width: RFValue(100),
              }}>
              Business Type :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(14),
              }}>
              Tech
            </Text>
          </View>
          <TouchableOpacity style={{backgroundColor:COLORS.Orange,paddingVertical:10,alignSelf:'center',paddingHorizontal:40,borderRadius:10,marginTop:50}}>
            <Text style={{color:COLORS.White,fontWeight:'600'}}>Apply for Job</Text>
          </TouchableOpacity>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: RFValue(10),
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}>
              Job Description :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(9),
                width: RFValue(170),
              }}>
              Sumer Complex,Shop No.32 Behind Sigma Schooleshav Chowk
              Porbandar-360575
            </Text>
          </View> */}
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: RFValue(10),
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}>
              Salary :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(9),
                width: RFValue(170),
                fontWeight: 'bold',
              }}>
              10,000 - 20,0000
            </Text>
          </View> */}
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: RFValue(10),
            }}>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(12),
                width: RFValue(100),
              }}>
              Job Posted Date :
            </Text>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: RFValue(9),
              }}>
              5th May 2024
            </Text>
          </View> */}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}>
        </View>
      </View>
      </View>
    </View>
  );
};

export default JobDetails;

const styles = StyleSheet.create({});
