import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function This({ navigation }) {
  const [state, dispatch] = React.useReducer(reducer) // TOFIX
  return (
    <View style={style.This}>
      <Text>{text.title}</Text>
      <Text>haha</Text>
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        title={text.seeDetails}
      />
    </View>
  )
}

// TOFIX
function reducer(state, action) {
  if (typeof action === 'string') action = { type: action }
  switch (action.type) {
    case 'goto': // 研究一下 switch 怎么结合正则？
    default:
      break
  }
}
const text = {
  title: '立刻使用 Adobe XD 进行UI原型的创作',
  seeDetails: '阅读更多'
}
const images = {}
const style = StyleSheet.create({
  This: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
