import React from 'react'
import { View, Text } from 'react-native'
import Box from './Box'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const defaultStyle = {
  width: Layout.textBoxWidth,
  fill: Colors.backgroundColor.Textbox,
  fontColor: Colors.text.main
}

export default function Textbox({
  children,
  font,
  width,
  fill,
  centerInBox,
  ...otherProps
}) {
  return (
    <Box
      {...otherProps}
      width={width || (!children || defaultStyle.width)}
      fill={fill || (!children || defaultStyle.fill)}
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
