import React from 'react'
import { StyleSheet, View } from 'react-native'

//---组件--//
import 标语 from '../screens/首页/标语'
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

//--样式--//
const style = StyleSheet.create({
  This: {
    flex: 1,
    backgroundColor: 'gold' //
  }
})
