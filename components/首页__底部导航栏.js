import React from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native'

//---内容设定---//
const images = [
  { source: require('../assets/images/跳转：首页.png'),   name: '首页', destination: '首页' },
  { source: require('../assets/images/跳转：购物车.png'), name: '购物车', destination: '购物车' },
  { source: require('../assets/images/跳转：我.png'),     name: '我', destination: '我' },
]
//---组件设定---//
// TODO:现在只是能用，但跟设定的排序方向并不一致
export default function This({ navigation }) {
  return (
    <View style={style.This}>
      {images.map(({ source, name, destination }) => (
        <TouchableHighlight
          key={name}
          onPress={() => navigation.navigate(destination)}
        >
          <Image source={source} style={style.Image} />
        </TouchableHighlight>
      ))}
    </View>
  )
}
const style = StyleSheet.create({
  This: {
    width: "100%", 
    height:9*8,
    position:'absolute',
    bottom:0,
    zIndex:24,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    backgroundColor: 'white',//
  },
  Image: {
    width: 30,
    aspectRatio: 1
  }
})
