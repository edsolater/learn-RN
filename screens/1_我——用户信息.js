import React from 'react'
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native'

//---固定内容---//

//---组件设定---//
function This({
  navigation,
  user: {
    ip = '000',
    avatar = require('../assets/images/默认头像.png'),
    integration = require('../assets/images/积分信息.png'),
    badges = require('../assets/images/成就信息.png')
  }
}) {
  return (
    <View style={style.This}>
      <Image style={style.Image} source={avatar} />
      <TouchableHighlight onPress={() => navigation.navigate('积分面板')}>
        <Image source={integration} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('成就面板')}>
        <Image source={badges} />
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
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 1 * 8,
    elevation: 6, //阴影反向竟然是向上的，不知道该怎么调？
    // background color must be set
    backgroundColor: 'white' // color
  },
  Image: {
    height: 10 * 8, //layout
    width: 10 * 8, //layout
    resizeMode: 'cover',
    borderRadius: 45 * 8
  }
})
