import React from 'react'
import { Text as ReactText } from 'react-native'


const defaultStyle = {
  fontSize: 14,
  color: 'hsla(238, 21%, 10%, 0.78)'
}


export default function __Text({
  // 此组件特殊参数
  text,
  type = 'main',
  color,
  fontSize,

  // text 字体相关设定
  Text,
  rootProps_text,

  // Box 相关设定
  ...proto
}) {
  return (
    <ReactText
      style={{
        fontSize: fontSize || defaultStyle.fontSize(type),
        color: color || defaultStyle.color,
        textAlign: 'center', // 文字永远居中与文本框
        ...Text
      }}
      {...rootProps_text}
    >
      {text}
    </ReactText>
  )
}
