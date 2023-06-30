import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

const StyleButton = (props) => {
    const backgroundColor = type == 'primary' ? '#171A20CC': 'white';
    const textColor = type == 'primary' ? 'white' : 'black';
    const {onPress, content, type} = props;


  return (
    <View style={styles.container}>
      <Pressable 
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={() => onPress()}
      >
          <Text style={[styles.text , {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyleButton;
