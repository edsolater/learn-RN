import React from 'react'
import { StyleSheet, ScrollView, View, Image, StatusBar } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const style = StyleSheet.create({
  box: {
    paddingBottom: Layout.bottomNavBarHeight,
    backgroundColor: Colors.screenBackground //
  }
})

let navigationOptions = ({ navigation, defaultNavigationOptions }) => ({
  title: '首页',
  headerStyle: {
    backgroundColor: '#333',
    display: 'none'
  },
  headerTintColor: '#fff'
})

function Screen({
  navigationOptions: options,
  children,
  bottomNavBar,
  style: styleFromInstance
}) {
  navigationOptions = options
  return (
    <View style={{ ...styleFromInstance }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={style.box}>{children}</ScrollView>
      {bottomNavBar}
    </View>
  )
}
Screen.navigationOptions = navigationOptions
export default Screen

// TODO: 给 <Screen /> 已单独的props
