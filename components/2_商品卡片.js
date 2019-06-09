import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native'

//---固定内容---//

//---组件设定---//
// TODO:现在只是能用，但跟设定排列顺序并不一致
export default function Component({
  navigation,
  id = '0000',
  imageSource = require('../assets/images/商品图片.png'),
  name = '缺省商品'
}) {
  return (
    <View style={style.box}>
      <TouchableHighlight
        onPress={() => navigation.navigate('商品详情', { id })}
      >
        <Image source={imageSource} style={style.Image} />
      </TouchableHighlight>
      <Text style={style.Text}>{name}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  box: {
    backgroundColor: 'gray',
    width: ((45 - 3) / 2) * 8,
    height: undefined,
    aspectRatio: 1 / 2
  },
  Image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  Text: {
    textAlign: 'center',
    color: 'white'
  }
})
