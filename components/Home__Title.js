import React from 'react'
import _ from 'lodash'
import { View, Text } from 'react-native'

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
export default function This() {
  const haha = React.useState(3)
  return (
    <View style={style.This}>
      <Text>{text.title}</Text>
      <Text>{haha}</Text>
    </View>
  )
}
