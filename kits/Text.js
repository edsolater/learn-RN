import React from 'react'
import { Text as React_Text } from 'react-native'
import Kit_Box from './Box'

const defaultStyle = {
  fontSize: 14,
  color: 'hsla(238, 21%, 10%, 0.78)'
}
const skeleton = {
  size: [112, undefined], // 空值不能改变 length，要显示地设定 undefined
  boxColor: 'hsla(150, 100%, 50%, 0.78)'
}

export default function Kit_Text({
  // 此组件专有参数、快捷参数
  text,
  type = 'main', // 并未依此做出自定义选项
  color,
  fontSize,

  // text 字体相关设定
  style_text,
  proto_text,

  // Box 相关设定
  ...proto
}) {
  return (
    <Kit_Box
      noSkeleton={text}
      skeleton={skeleton}
      {...proto}
    >
      <React_Text
        style={{
          fontSize: fontSize || defaultStyle.fontSize,
          color: color || defaultStyle.color,
          textAlign: 'center', // 文字永远居中与文本框
          ...style_text
        }}
        {...proto_text}
      >
        {text}
      </React_Text>
    </Kit_Box>
  )
}
