import React from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native'

const images = [
  {
    source: require('../assets/images/跳转：首页.png'),
    name: '首页',
    destination: '首页'
  },
  {
    source: require('../assets/images/跳转：购物车.png'),
    name: '购物车',
    destination: '购物车'
  },
  {
    source: require('../assets/images/跳转：我.png'),
    name: '我',
    destination: '我'
  }
]
export default function Component({ navigation }) {
  return (
    <View
      style={{
        width: '100%',
        height: 72,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ccc', //color
        elevation: 24
      }}
    >
      {images.map(({ source, name, destination }) => (
        <TouchableHighlight
          key={name}
          onPress={() => navigation.navigate(destination)}
        >
          <Image
            source={source}
            style={{
              width: 30,
              aspectRatio: 1
            }}
          />
        </TouchableHighlight>
      ))}
    </View>
  )
}
