import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const defaultStyle = {
  backgroundColor: Colors.backgroundColor.Screen,
  statusBarIconTheme: 'light'
}

export default function Screen({
  children,
  NavBar,
  screenBackgroundColor = defaultStyle.backgroundColor,
  statusBarIconTheme = defaultStyle.statusBarIconTheme
}) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={`${statusBarIconTheme}-content`} />
      <ScrollView style={{ backgroundColor: screenBackgroundColor }}>
        {children}
      </ScrollView>
      {NavBar}
    </View>
  )
}
