import React from 'react'
import { StyleSheet, TouchableHighlight, View, Image, Text } from 'react-native'

//---固定内容---//

//---组件设定---//
function This({ navigation, user = {} }) {
  return (
    <View style={style.This}>
      <Image source={require('../../assets/images/收藏夹.png')} />
      <TouchableHighlight onPress={() => navigation.navigate('收藏面板')}>
        <Image source={require('../../assets/images/省略号.png')} />
      </TouchableHighlight>
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

    marginBottom: 1 * 8,
    elevation: 6, //阴影反向竟然是向上的，不知道该怎么调？
    // background color must be set
    backgroundColor: 'white' // color
  }
})
