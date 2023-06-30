import React from 'react'
import {Text, View, ImageBackground } from 'react-native';
import styles from './style';
const CarItems = (props) => {
  return (
    <View style={styles.carContainer}>
    <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}/>
    <View style={styles.titles}> 
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subTitle}>Starting At $60,000</Text>
    </View>
  </View>
  )
}
  

export default CarItems