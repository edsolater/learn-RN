import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function Screen({ children, NavBar, fill, iconTheme }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: fill || Colors.backgroundColor.Screen
      }}
    >
      <StatusBar barStyle={`${iconTheme}-content`} />
      <ScrollView
        style={{
          marginBottom: Layout.NavBarHeight,
          backgroundColor: Colors.screenBackground
        }}
      >
        {children}
      </ScrollView>
      {NavBar}
    </View>
  )
}
