import React from 'react'
import Box from './Box'
import { View } from 'react-native'
import Text from './Text'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const defaultStyle = {
  fontSize: (type = 'main') => GlobalStyle.fontSize[type] || 14,
  fontColor: GlobalStyle.font.main.fontColor
}
const thisKitSkeleton = GlobalStyle.skeleton.Button

export default function KitButton({
  defaultSize,
  defaultColor,
  children,
  text,

  // text 字体相关设定
  fontColor,
  fontSize,
  debugMode,
  type, // 实际上规定了 fontSize
  center_text,
  style,
  rootStyle_Text = style,
  rootProps_Text,

  // Box 相关设定
  width,
  wordNum, // 实际上与 fontSize 联合规定了 width
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
        width ||
        (wordNum && wordNum * (fontSize || defaultStyle.fontSize(type)))
      }
      boxColor={boxColor}
      noBoxcolor={children}
      center={center_Box}
      skeleton={thisKitSkeleton}
      rootStyle_view={rootStyle_Box}
      rootProps_view={rootProps_Box}
      {...otherProps}
    >
      {/* <View style={{ alignSelf: 'center', width: 44,height:undefined, backgroundColor: 'gold' }}>
        <Box width={36}/>
      </View> */}
      <Text
        center
        absolute
        fontColor={fontColor || thisKitSkeleton.fontColor}
        debugMode={debugMode}
      >
        {text || children}
      </Text>
    </Box>
  )
}
