import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import 底部导航栏 from '../components/我/底部导航栏'
import 用户信息 from '../components/我/用户信息'
import 收藏夹 from '../components/我/收藏夹'
import 物流信息 from '../components/我/物流信息'

  const style = StyleSheet.create({
    box: {
      flex: 1,
      backgroundColor: 'yellow' //color
    },
    ScrollView: {
      marginBottom: 9 * 8
    }
  })


export default function 购物车({ navigation, user = {} }) {
  return (
    <View style={style.box}>
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
购物车.navigationOptions = function({ navigation, navigationOptions }) {
  return {
    title: '我'
    // headerStyle: {
    //   backgroundColor: navigationOptions.headerTintColor
    // },
    // headerTintColor: navigationOptions.headerStyle.backgroundColor
  }
}

