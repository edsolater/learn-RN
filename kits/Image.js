import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export default function MyImage(size, onPress, source) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image
        source={source}
        style={style.Image}
      />
    </TouchableOpacity>
  )
}
