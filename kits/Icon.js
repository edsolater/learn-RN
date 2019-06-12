import React from 'react'
import { TouchableOpacity } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

const defaultStyle = {}

export default function Text({
  children,
  font,
  width,
  boxColor,
  centerInBox,
  ...otherProps
}) {
  return (
    <Box
      {...otherProps}
      width={width || (!children || defaultStyle.width)}
      boxColor={boxColor || (!children || defaultStyle.boxColor)}
    >
      <Text
        style={{
          color: font.color || defaultStyle.fontColor,
          ...font,
          textAlign: centerInBox && 'center'
        }}
      >
        {children}
      </Text>
    </Box>
  )
}
