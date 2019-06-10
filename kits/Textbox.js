import React from 'react'
import { View, Text } from 'react-native'
import Box from './Box'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

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
      width={width || (!children || Layout.textBoxWidth)}
      fill={fill || (!children || Colors.backgroundColor.Textbox)}
    >
      <Text style={{ ...font, textAlign: centerInBox && 'center' }}>
        {children}
      </Text>
    </Box>
  )
}
