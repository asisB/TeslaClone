import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import style from './style';
import cars from './cars';
import CarItems from '../carItems';

const CarsList = (props) => {
  return (
    <View style={style.container}>
      <FlatList 
      data={cars}
      renderItem={({item}) => <CarItems car={item}/>}
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarsList;