import React from 'react'
import _ from 'lodash'
import { View, Text, Button } from 'react-native'

const text = {
  title: 'hello world 2'
}
const layout = {
  This: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}
const color = {
  This: {
    backgroundColor: 'gold'
  }
}
const style = _.merge(layout, color)

// TOFIX
function reducer(state, action) {
  if (typeof action === 'string') action = { type: action }
  switch (action.type) {
    case 'goto': // 研究一下 switch 怎么结合正则？
      
    default:
      break
  }
}
export default function This({ navigation }) {
  const [state, dispatch] = React.useReducer(reducer) // TOFIX
  // TODO: 自己写一个函数，看看 rerender 时会不会重复调用？ 
  return (
    <View style={style.This}>
      <Text>{text.title}</Text>
      <Text>{haha}</Text>
      <Button
        onPress={() => dispatch({ type: 'goto', payload: { navigation } })}
      />
    </View>
  )
}
