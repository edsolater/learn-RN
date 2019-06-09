import React from 'react'
import { View } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function Box({
  children,
  layout: { width, height, top, right, bottom, left } = {},
  apperance: { rounded, fill } = {},
  center,
  absolute
}) {
  console.log(right)
  const content = (
    <View
      style={{
        ...(center && {
          justifyContent: 'center',
          alignItems: 'center'
        }),
        width,
        height,
        marginRight: right || (left ? 'auto' : null),
        marginLeft: left || (right ? 'auto' : null),
        marginTop: top || (bottom ? 'auto' : null),
        marginBottom: bottom || (top ? 'auto' : null),
        borderRadius: rounded,
        backgroundColor: fill || Colors.boxBackground,
      }}
    >
      {children}
    </View>
  )
  if (absolute) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          ...(center && {
            justifyContent: 'center',
            alignItems: 'center'
          })
        }}
      >
        {content}
      </View>
    )
  } else {
    return content
  }
}
// TODO:<Box> 的有背景色；<Group> 背景色全透明
