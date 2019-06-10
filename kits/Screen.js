import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  backgroundColor: GlobalStyle.boxColor.ScreenBackground,
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
