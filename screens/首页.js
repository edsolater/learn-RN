import React from 'react'
import { StyleSheet } from 'react-native'
import { Screen } from '../kits'

import 底部导航栏 from '../components/底部导航栏'
import 搜索栏 from '../components/首页/搜索栏'
import Banner from '../components/首页/Banner'
import 金刚区 from '../components/首页/金刚区'
import 商品卡片 from '../components/2_商品卡片'

const style = StyleSheet.create({
  box: {
    marginBottom: 9 * 8,
    backgroundColor: 'hsl(229, 20%, 20%)' //
  }
})

export default function 首页({ navigation }) {
  return (
    <Screen Navbar={()=> <底部导航栏 navigation={navigation} />}>
      <搜索栏 navigation={navigation} />
      <Banner navigation={navigation} />
      <金刚区 navigation={navigation} />
      <商品卡片 navigation={navigation} />
      <商品卡片 navigation={navigation} />
    </Screen>
  )
}
首页.navigationOptions = ({ navigation, defaultNavigationOptions }) => ({
  title: '首页',
  headerStyle: {
    backgroundColor: '#333',
    display: 'none'
  },
  headerTintColor: '#fff'
})

