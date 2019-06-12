import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Image as MyImage } from '../../kits'

const images = [
  {
    source: require('../../assets/images/类.png'),
    name: '类',
    destination: '商品分类'
  },
  {
    source: require('../../assets/images/新.png'),
    name: '新',
    destination: '新品榜'
  },
  {
    source: require('../../assets/images/热.png'),
    name: '热',
    destination: '热销榜'
  },
  {
    source: require('../../assets/images/飙.png'),
    name: '飙',
    destination: '飙升榜'
  },
  {
    source: require('../../assets/images/更.png'),
    name: '更',
    destination: '更多'
  }
]

export default function This({ navigation }) {
  return (
    <View style={style.This}>
      {images.map(({ source, name, destination }) => (
        <MyImage
          key={name}
          source={source}
          onPress={() => navigation.navigate(destination)}
          center_image
          round={40}
          size={80}
          rootElementStyle_Box={{
            width: 20
          }}
          mode="stretch"
        />
        // <TouchableOpacity
        //   key={name}
        //   onPress={() => navigation.navigate(destination)}
        // >
        //   <Image source={source} style={style.Image} />
        // </TouchableOpacity>
      ))}
    </View>
  )
}
const style = StyleSheet.create({
  This: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
