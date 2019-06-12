import React from 'react'
import { Text } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const defaultStyle = {
  kitSize: GlobalStyle.kitSize.Text,
  fontSize: (type = 'main') => GlobalStyle.fontSize[type] || 14,
  kitColor: GlobalStyle.kitColor.Text,
  fontColor: GlobalStyle.fontColor.main
}

export default function KitText({
  defaultSize,
  defaultColor,
  children,
  text,

  // text 字体相关设定
  fontColor,
  fontSize,
  type, // 实际上规定了 fontSize
  center_text,
  style,
  rootStyle_Text = style,
  rootProps_text,

  // Box 相关设定
  boxWidth,
  wordNum, // 实际上与 fontSize 联合规定了 boxWidth
  backgroundColor,
  background = backgroundColor,
  boxColor = background,
  center,
  center_Box = center, //  center_Box 是为了和 center_text 保持对称性而存在
  rootStyle_Box,
  rootProps_Box,
  ...otherProps
}) {
  /**
   * ---------------- 返回组件 ----------------
   */
  return (
    <Box
      width={
        boxWidth ||
        (wordNum && wordNum * (fontSize || defaultStyle.fontSize(type)))
      }
      boxColor={boxColor}
      noBoxcolor={children}
      center={center_Box}
      defaultSize={defaultSize || defaultStyle.kitSize}
      defaultColor={defaultColor || defaultStyle.kitColor}
      rootStyle_view={rootStyle_Box}
      rootProps_view={rootProps_Box}
      {...otherProps}
    >
      <Text
        style={{
          fontSize: fontSize || defaultStyle.fontSize(type),
          color: fontColor || defaultStyle.fontColor,
          textAlign: center_text && 'center',
          ...rootStyle_Text
        }}
        {...rootProps_text}
      >
        {text || children}
      </Text>
    </Box>
  )
}
