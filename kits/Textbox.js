import React from 'react'
import { Text } from 'react-native'
import Box from './Box'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  width: GlobalStyle.textBoxWidth,
  boxColor: GlobalStyle.boxColor.Textbox,
  fontColor: GlobalStyle.text.main
}

export default function Textbox({
  children,
  font,
  amount,
  boxColor,
  centerInBox,
  ...otherProps
}) {
  return (
    <Box
      {...otherProps}
      width={(amount || 8) * (font.fontSize || defaultStyle.textBoxWidth)}
      boxColor={boxColor || (children ? 'transparent' : defaultStyle.boxColor)}
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
