import React from 'react'
import { TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const defaultStyle = {
  kitSize: GlobalStyle.kitSize.Image,
  kitColor: GlobalStyle.kitColor.Image
}
const touchEffects = {
  opacity: TouchableOpacity,
  highlight: TouchableHighlight
}

export default function MyImage({
  defaultSize,
  defaultColor,

  // Touchable
  onPress,
  type = 'opacity',
  rootStyle_touchable,
  rootProps_touchable,

  // Image
  source,
  mode, // 定义图像相对占位图框的内部位置模式
  size,
  width,
  height,
  style,
  rootStyle_image = style,
  rootProps_image,

  // Box
  boxColor,
  rootStyle_Box, // 为了有代码提示功能
  rootProps_Box, // 为了有代码提示功能
  ...otherProps
}) {
  /**
   * ---------------- 处理 props (可优化) ----------------
   */
  // 处理尺寸信息,不用给 Box 看，给 image 看
  size = Array.of(size).flat()
  width = width || size[0]
  height = height || size[1] || size[0]

  /**
   * ---------------- 返回组件 ----------------
   */
  const ImageTouchEffect = touchEffects[type]
  console.log('defaultSize: ', defaultSize)
  return (
    <Box
      width={width}
      height={height}
      size={size}
      boxColor={boxColor}
      noBoxcolor={source}
      defaultSize={defaultSize || defaultStyle.kitSize}
      defaultColor={defaultColor || defaultStyle.kitColor}
      rootStyle_view={{ ...rootStyle_Box }}
      rootProps_view={rootProps_Box}
      {...otherProps}
    >
      <ImageTouchEffect
        onPress={onPress}
        style={{ ...rootStyle_touchable }}
        {...rootProps_touchable}
      >
        <Image
          source={source}
          style={{
            ...(width ? { width: width } : {}),
            ...(height ? { height: height } : {}),
            resizeMode: mode,
            ...rootStyle_image
          }}
          {...rootProps_image}
        />
      </ImageTouchEffect>
    </Box>
  )
}
