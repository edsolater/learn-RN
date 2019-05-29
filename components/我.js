import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import 底部导航栏 from './我__底部导航栏'
import 用户信息 from './我__用户信息'
import 收藏夹 from './我__收藏夹'
import 物流信息 from './我__物流信息'
function This({ navigation, user = {} }) {
  return (
    <View style={style.This}>
      <ScrollView
        style={style.ScrollView}
        contentContainerStyle={{
          flex:1
        }}
      >
        <用户信息 navigation={navigation} user={user} />
        <收藏夹 navigation={navigation} user={user} />
        <物流信息 navigation={navigation} user={user} />
      </ScrollView>
      <底部导航栏 navigation={navigation} />
    </View>
  )
}
This.navigationOptions = function({ navigation, navigationOptions }) {
  return {
    title: '我'
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
    backgroundColor: 'yellow' //color
  },
  ScrollView: {
    marginBottom: 9 * 8
  }
})
