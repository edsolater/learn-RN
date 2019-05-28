import React from 'react'
import { StyleSheet, View } from 'react-native'

//---内容设定---//

//---组件设定---//
import 搜索栏 from './首页__搜索栏'
import Banner from './首页__banner'
import 金刚区 from './首页__金刚区'
import 底部导航栏 from './首页__底部导航栏'

function This({ navigation }) {
  return (
    <View style={{position:'a'}} style={style.This}>
      <搜索栏 navigation={navigation} />
      <Banner navigation={navigation} />
      <金刚区 navigation={navigation} />
      <底部导航栏 navigation={navigation} />
    </View>
  )
}
This.navigationOptions = function({ navigation, defaultNavigationOptions }) {
  console.log('defaultNavigationOptions: ', defaultNavigationOptions)
  return {
    title: '首页',
    headerStyle: {
      backgroundColor: '#333'
    },
    headerTintColor: '#fff'
  }
}
export default This

const style = StyleSheet.create({
  This: {
    flex: 1,
    backgroundColor: 'hsl(229, 20%, 20%)' //
  }
})
