import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'


export default function MyText({
  children,
  style
}) {
  return (
    <View style={style}>
      {children}
    </View>
  )
}