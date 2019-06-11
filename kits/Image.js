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
  style,
  rootElementStyle_image = style,
  rootElement_image,

  // Box
  ...otherProps
}) {
  const ImageTouchEffect = touchEffects[type]
  return (
    <Box {...otherProps}>
      <ImageTouchEffect
        onPress={onPress}
        style={{ ...rootElementStyle_touchable }}
        {...rootElement_touchable}
      >
        <Image
          source={source}
          style={{
            ...(width || size ? { width: width || size } : {}),
            ...(height || size ? { height: height || size } : {}),
            resizeMode: mode,
            ...rootElementStyle_image
          }}
          {...rootElement_image}
        />
      </ImageTouchEffect>
    </Box>
  )
}
