import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  Text
} from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function Screen({
  children,
  bottomNavBar,
  style: styleFromInstance
}) {
  return (
    <View style={{ flex:1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={{
          marginBottom: Layout.bottomNavBarHeight,
          backgroundColor: Colors.screenBackground
        }}
      >
        {children}
      </ScrollView>
      {bottomNavBar}
    </View>
  )
}
