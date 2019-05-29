import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'

//---固定内容---//

//---组件设定---//
import 搜索栏 from './0_首页——搜索栏'
import Banner from './0_首页——banner'
import 金刚区 from './0_首页——金刚区'
import 底部导航栏 from './0_首页——底部导航栏'
import 商品卡片 from './basic/商品卡片'

function This({ navigation }) {
  return (
    <View>
      <ScrollView style={style.This}>
        <搜索栏 navigation={navigation} />
        <Banner navigation={navigation} />
        <金刚区 navigation={navigation} />
        <商品卡片 navigation={navigation} />
      </ScrollView>
      <底部导航栏 navigation={navigation} />
    </View>
  )
}
This.navigationOptions = function({ navigation, defaultNavigationOptions }) {
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
    marginBottom: 9 * 8,
    backgroundColor: 'hsl(229, 20%, 20%)' //
  }
})
