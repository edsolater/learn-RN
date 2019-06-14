import React from 'react'
import Box from './Box'
import { TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from './Icon'
import Text from './Text'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const thisKitSkeleton = GlobalStyle.skeleton.Button
const touchEffects = {
  opacity: TouchableOpacity,
  highlight: TouchableHighlight
}
const buttonIconSkeleton = GlobalStyle.skeleton.ButtonIcon

export default function KitButton({
  direction = 'row', //规定内部元素的排布方向
  text, // 快捷方式字符串内容
  debugMode,

  // 按钮反馈设定
  effectType = 'opacity',
  onPress,

  // 完全传递给 <Icon> 组件
  IconProps,
  // 完全传递给 <Text> 组件
  TextProps,

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
        {Icon && (
          <Icon skeleton={buttonIconSkeleton} debugMode={debugMode} {...IconProps} />
        )}
        {(text || TextProps) && (
          <Text
            width="auto" // 开发此 Kit 时需要
            fontColor={'white'}
            fontSize={24}
            debugMode={debugMode}
            text={text}
            {...TextProps}
          />
        )}
      </Box>
    </ImageTouchEffect>
  )
}
