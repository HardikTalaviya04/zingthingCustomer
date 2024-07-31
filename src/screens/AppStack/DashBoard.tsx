import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
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
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../common/Utils/screenName";
import { StatusBar } from "react-native";

export default function DashBoard() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainBody}>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.PrimeryColor}
        barStyle={"dark-content"}
      />
      <View style={{ flex: 1, margin: RFValue(12), justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.OldJobPosts)}
        >
          <Text style={styles.buttonText}>{"FIND A JOB WITH OLD SEARCH"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.PostJob,{
            NavData:null
          })}
        >
          <Text style={styles.buttonText}>{"FIND A JOB WITH NEW SEARCH"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.AvailableJob)}
        >
          <Text style={styles.buttonText}>{"AVAILABLE JOBS"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.NewsFeed)}
        >
          <Text style={styles.buttonText}>{"NEWS FEED"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: COLORS.PrimeryColor,
  },
  buttonText: {
    textAlign: "center",
    fontSize: RFValue(16),
    color: COLORS.PrimeryColor,
    fontWeight: "500",
    marginHorizontal: RFValue(45),
    lineHeight: RFValue(22),
  },
  buttonView: {
    backgroundColor: COLORS.Orange,
    padding: RFValue(10),
    borderRadius: RFValue(4),
    marginTop: RFValue(30),
    marginHorizontal: RFValue(20),
  },
});
