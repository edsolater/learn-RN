import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function Screen({
  children,
  NavBar,
  screenBackground,
  statusBarIconTheme
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: screenBackground || Colors.backgroundColor.Screen
      }}
    >
      <StatusBar barStyle={`${statusBarIconTheme}-content`} />
      <ScrollView
        style={{
          backgroundColor: Colors.screenBackground
        }}
      >
        {children}
      </ScrollView>
      {NavBar}
    </View>
  )
}
