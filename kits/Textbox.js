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
  fontColor, // 优先级较高
  font,
  wordNum,
  boxColor,
  fontCenter,
  boxCenter:center,
  ...otherProps
}) {
  return (
    <Box
      {...otherProps}
      width={(wordNum || 8) * (font.fontSize || defaultStyle.textBoxWidth)}
      boxColor={boxColor || (children ? 'transparent' : defaultStyle.boxColor)}
      center={center}
    >
      <Text
        style={{
          ...font,
          color: fontColor || font.color || defaultStyle.fontColor,
          textAlign: fontCenter && 'center'
        }}
      >
        {children}
      </Text>
    </Box>
  )
}
