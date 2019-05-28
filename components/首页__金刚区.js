import React from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native'

//---内容设定---//
const images = [
  { source: require('../assets/类.png'), name: '类', destination: '商品分类' },
  { source: require('../assets/新.png'), name: '新', destination: '新品榜' },
  { source: require('../assets/热.png'), name: '热', destination: '热销榜' },
  { source: require('../assets/飙.png'), name: '飙', destination: '飙升榜' },
  { source: require('../assets/更.png'), name: '更', destination: '更多' }
]

//---组件设定---//
// TODO:现在只是能用，但跟设定排列顺序并不一致
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
    justifyContent: 'flex-start',
    alignItems: 'center', 
    backgroundColor: 'white'
  },
  Image: {
    width: 30,
    aspectRatio: 1
  }
})
