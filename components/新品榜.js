import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

//---内容设定---//
const goods = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

//---组件设定---//
import 商品卡片 from './basic/商品卡片'
function This({ navigation }) {
  return (
    <ScrollView style={style.This}>
      <View>
        {goods.map(({}, index) => (
          <商品卡片 key={`${index}`} />
        ))}
      </View>
    </ScrollView>
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
    backgroundColor: 'gold' //
  }
})
