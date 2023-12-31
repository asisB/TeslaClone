import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'

const Header =() => {
  return (
    <View style={style.container}>
        <Image style={style.logo} source={require('../../assets/images/logo.png')}/>
        <Image style={style.logo} source={require('../../assets/images/menu.png')}/>
    </View>
  )
}

export default Header;