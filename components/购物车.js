import { StyleSheet, View } from 'react-native'
import React from 'react'

import 标语 from './首页/标语'
function This({ navigation }) {
  return (
    <View style={style.This}>
      <标语 navigation={navigation} />
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
