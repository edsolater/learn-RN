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
  fontColor,
  fontSize,
  type, // 实际上规定了 fontSize
  center_text,
  rootElementStyle_Text, // 不得已才调用 
  rootElement_text, // 不得已才调用
  
  // textbox 字体盒子相关设定
  boxWidth,
  wordNum, // 实际上与 fontSize 联合规定了 boxWidth
  boxColor,
  center_Box,
  center,
  rootElementStyle_Box, // 不得已才调用
  rootElement_Box, // 不得已才调用
  ...otherProps_Box
}) {
  center = center || center_Box // 所以 center_Box 只是为了增加语义性
  return (
    <Box
      width={
        boxWidth ||
        (wordNum || defaultStyle.wordNum) *
          (fontSize || defaultStyle.fontSize(type))
      }
      boxColor={boxColor || (children ? 'transparent' : defaultStyle.boxColor)}
      center={center}
      style={rootElementStyle_Box}
      {...otherProps_Box}
      rootElement_view={rootElement_Box}
    >
      <Text
        style={{
          ...rootElementStyle_Text,
          fontSize: fontSize || defaultStyle.fontSize(type),
          color: fontColor || defaultStyle.fontColor,
          textAlign: center_text && 'center'
        }}
        {...rootElement_text}
      >
        {children}
      </Text>
    </Box>
  )
}
