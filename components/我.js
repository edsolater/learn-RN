import React from 'react'
import { StyleSheet, View } from 'react-native'

import 底部导航栏 from './我__底部导航栏'
function This({ navigation }) {
  return (
    <View style={style.This}>
      <底部导航栏 navigation={navigation} />
    </View>
  )
}
This.navigationOptions = function({ navigation, navigationOptions }) {
  return {
    title: navigation.getParam('title', '') + 'haha'
    // headerStyle: {
    //   backgroundColor: navigationOptions.headerTintColor
    // },
    // headerTintColor: navigationOptions.headerStyle.backgroundColor
  }
}
export default This

const style = StyleSheet.create({
  This: {
    flex: 1,
    backgroundColor: 'gold' //
  }
})
