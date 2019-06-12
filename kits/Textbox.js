import React from 'react'
import { Text } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const defaultStyle = {
  wordNum: GlobalStyle.defaultWordNum,
  fontSize: (type = 'main') => GlobalStyle.fontSize[type] || 14,
  boxColor: GlobalStyle.defaultColor.Textbox,
  fontColor: GlobalStyle.fontColor.main
}

export default function Textbox({
  children,

  // font 字体相关设定
  fontColor,
  fontSize,
  type, // 实际上规定了 fontSize
  center_text,
  rootElementStyle_Text,
  rootElement_text,

  // textbox 字体盒子相关设定
  boxWidth,
  wordNum, // 实际上与 fontSize 联合规定了 boxWidth
  backgroundColor,
  background = backgroundColor,
  boxColor = background,
  center,
  center_Box = center, //  center_Box 是为了和 center_text 保持对称性而存在
  rootElementStyle_Box,
  rootElement_Box,
  ...otherProps
}) {
  /**
   * ---------------- 返回组件 ----------------
   */
  return (
    <Box
      width={
        boxWidth ||
        (wordNum || defaultStyle.wordNum) *
          (fontSize || defaultStyle.fontSize(type))
      }
      boxColor={boxColor || defaultStyle.boxColor}
      noBoxcolor={children}
      center={center_Box}
      rootElementStyle_view={rootElementStyle_Box}
      rootElement_view={rootElement_Box}
      {...otherProps}
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
