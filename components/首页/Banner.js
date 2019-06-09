import React from 'react'
import { StyleSheet, View,  Text } from 'react-native'

//---固定内容---//
const style = StyleSheet.create({
  box: {
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

//---组件设定---//
// TODO:现在只是能用，但跟设定排列顺序并不一致
export default function Component({ navigation }) {
  return (
    <View style={style.box}>
      <Text style={style.Text}>banner</Text>
    </View>
  )
}
