import React from 'react'
import { StyleSheet, View,  Text } from 'react-native'

//---固定内容---//

//---组件设定---//
// TODO:现在只是能用，但跟设定排列顺序并不一致
export default function This({ navigation }) {
  return (
    <View style={style.This}>
      <Text style={style.Text}>banner</Text>
    </View>
  )
}
const style = StyleSheet.create({
  This: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: '10%',
  },
  Text: {
    color: 'white',
    fontSize: 18
  }
})
