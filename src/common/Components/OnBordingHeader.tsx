import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {IMAGE} from '../Utils/image';
import {COLORS} from '../Utils/Colors';
import {FONTS} from '../Utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../Utils/screenName';
const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;
const OnBordingHeader = ({label, Back = true, isMyJob = false}: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.White} />
      <View style={styles.headerView}>
        {Back && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Image source={IMAGE.Back} style={styles.backImge} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: COLORS.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(20),
    borderBottomRightRadius: RFValue(20),
    borderBottomLeftRadius: RFValue(20),
    marginTop: RFValue(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  headerText: {
    textAlign: 'center',
    color: COLORS.Orange,
    fontSize: RFValue(16),
    fontFamily: FONTS.ExtraBold,
    fontWeight: 'bold',
    width: ScreenWidth - RFValue(64),
  },
  backImge: {
    resizeMode: 'contain',
    height: RFValue(24),
    width: RFValue(24),
  },
});

export default OnBordingHeader;
