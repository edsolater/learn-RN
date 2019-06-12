import React from 'react'
import { TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Box from './Box'

const touchEffects = {
  opacity: TouchableOpacity,
  highlight: TouchableHighlight
}

export default function MyImage({
  // Touchable
  onPress,
  type = 'opacity',
  rootElementStyle_touchable,
  rootElement_touchable,

  // Image
  source,
  mode,
  size,
  width,
  height,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  style,
  rootElementStyle_image = style,
  rootElement_image,

  // Box
  rootElementStyle_Box, // 为了有代码提示功能
  rootElement_Box, // 为了有代码提示功能
  ...otherProps
}) {
  /**
   * ---------------- 处理 props (可优化) ----------------
   */
  // 处理尺寸信息
  size = Array.of(size).flat()
  width = width || size[0]
  height = height || size[1] || size[0]

  /**
   * ---------------- 返回组件 ----------------
   */
  const ImageTouchEffect = touchEffects[type]
  return (
    <Box
      width={width} // 占位尺寸
      height={height} // 占位尺寸
      rootElementStyle_view={rootElementStyle_Box}
      rootElement_view={rootElement_Box}
      {...otherProps}
    >
      <ImageTouchEffect
        onPress={onPress}
        style={{ ...rootElementStyle_touchable }}
        {...rootElement_touchable}
      >
        <Image
          source={source}
          style={{
            ...(width ? { width: width } : {}),
            ...(height ? { height: height } : {}),
            resizeMode: mode,
            ...rootElementStyle_image
          }}
          {...rootElement_image}
        />
      </ImageTouchEffect>
    </Box>
  )
}
