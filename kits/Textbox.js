import React from 'react'
import { Text } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  wordNum: GlobalStyle.defaultWordNum,
  fontSize: (type = 'main') => GlobalStyle.fontSize[type] || 14,
  boxColor: GlobalStyle.boxColor.Textbox,
  fontColor: GlobalStyle.fontColor.main
}

export default function Textbox({
  children,

  // font 字体相关设定
  fontColor, // 优先级较高
  fontSize,
  fontType,
  wordNum,
  fontCenter,
  // 只是为了开发方便，非控件避免调用它们。会增加理解成本的
  font,

  // textbox 字体盒子相关设定
  boxColor,
  boxCenter,
  center,
  ...otherProps
}) {
  center = center || boxCenter // 所以 boxCenter 只是为了增加语义性
  return (
    <Box
      {...otherProps}
      width={
        (wordNum || defaultStyle.wordNum) *
        (fontSize || defaultStyle.fontSize(fontType))
      }
      boxColor={boxColor || (children ? 'transparent' : defaultStyle.boxColor)}
      center={center}
    >
      <Text
        style={{
          ...font,
          color: fontColor || defaultStyle.fontColor,
          textAlign: fontCenter && 'center'
        }}
      >
        {children}
      </Text>
    </Box>
  )
}
