import React from 'react'
import Box from './Box'
import { TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from './Icon'
import Text from './Text'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const thisKitFontStyle = (type = 'normal') => GlobalStyle.font[`button_${type}`]
const thisKitSkeleton = GlobalStyle.skeleton.Button
const touchEffects = {
  opacity: TouchableOpacity,
  highlight: TouchableHighlight
}
const buttonIconSkeleton = GlobalStyle.skeleton.ButtonIcon

export default function KitButton({
  direction = 'row', //规定内部元素的排布方向
  text, // 字符串内容

  // 按钮反馈设定
  effectType = 'opacity',
  onPress,

  // text 字体相关设定
  fontColor,
  fontSize,
  fontType, // 实际上规定了 fontSize
  debugMode,
  style,
  rootStyle_Text = style,
  rootProps_Text,

  // Icon 设定
  icon,
  source,
  gutter,

  // Box 相关设定
  rootStyle_Box,
  rootProps_Box,
  ...otherProps
}) {
  /**
   * ---------------- 返回组件 ----------------
   */
  const ImageTouchEffect = touchEffects[effectType]
  return (
    <ImageTouchEffect onPress={onPress}>
      <Box
        round={thisKitSkeleton.round}
        skeleton={thisKitSkeleton}
        rootStyle_view={{
          flexDirection: direction,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          justifyItems: 'center',
          ...rootStyle_Box
        }}
        rootProps_view={rootProps_Box}
        {...otherProps}
      >
        {icon && (
          <Icon
            source={source}
            right={gutter}
            skeleton={buttonIconSkeleton}
            debugMode={debugMode}
          />
        )}
        {text && (
          <Text
            width={40} // 开发此 Kit 时需要
            fontColor={fontColor || thisKitFontStyle(fontType).fontColor}
            debugMode={debugMode}
            text={text}
          />
        )}
      </Box>
    </ImageTouchEffect>
  )
}
