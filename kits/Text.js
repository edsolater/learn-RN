import React from 'react'
import { Text } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const defaultStyle = {
  fontSize: (type = 'main') => GlobalStyle.fontSize[type] || 14,
  fontColor: GlobalStyle.font.main.fontColor
}
const thisKitSkeleton = GlobalStyle.skeleton.Text

export default function KitText({
  text,

  // text 字体相关设定
  fontColor,
  fontSize,
  fontType, // 实际上规定了 fontSize
  style,
  rootStyle_Text = style,
  rootProps_text,

  // Box 相关设定
  width,
  wordNum, // 实际上与 fontSize 联合规定了 width
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
        width ||
        (wordNum && wordNum * (fontSize || defaultStyle.fontSize(fontType))) ||
        (thisKitSkeleton && thisKitSkeleton.size && thisKitSkeleton.size[0])
      }
      hideSkeleton={text}
      skeleton={thisKitSkeleton}
      rootStyle_view={rootStyle_Box}
      rootProps_view={rootProps_Box}
      {...otherProps}
    >
      <Text
        style={{
          fontSize: fontSize || defaultStyle.fontSize(fontType),
          color: fontColor || defaultStyle.fontColor,
          textAlign: 'center', // 文字永远居中与文本框
          ...rootStyle_Text
        }}
        {...rootProps_text}
      >
        {text}
      </Text>
    </Box>
  )
}
