import React from 'react'
import Kit_Box from './Box'
import { TouchableOpacity, TouchableHighlight } from 'react-native'


const skeleton = {
  size: [120, 60],
  boxColor: 'hsl(0, 0%, 90%)'
}
const touchEffects = {
  opacity: TouchableOpacity,
  highlight: TouchableHighlight
}

export default function Kit_Card({
  children,
  direction = 'row', //规定内部元素的排布方向

  // 按钮反馈设定
  effectType = 'opacity',
  onPress,

  // Box 相关设定
  style, // 因为会手动设置，所以需要指明此参数。但跟 <Box> 的 style 一样
  ...proto
}) {
  const ImageTouchEffect = touchEffects[effectType]
  return (
    <ImageTouchEffect onPress={onPress}>
      <Kit_Box
        skeleton={skeleton}
        clipping
        style={{
          flexDirection: direction,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          justifyItems: 'center',
          ...style
        }}
        {...proto}
      >
        {children}
      </Kit_Box>
    </ImageTouchEffect>
  )
}
