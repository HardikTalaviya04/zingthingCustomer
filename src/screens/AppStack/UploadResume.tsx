import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import OnBordingHeader from '../../common/Components/OnBordingHeader'
const {width, height} = Dimensions.get('window');

const UploadResume = () => {
  return (
    <View style={{flex:1,backgroundColor:'#EFFDFD'}}>
        <View>
        <OnBordingHeader label={'JobID'} Back={true} />
        </View>
    </View>
  )
}

export default UploadResume

const styles = StyleSheet.create({})