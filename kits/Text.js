import React from 'react'
import { View, Text } from 'react-native'
import Box from './Box'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const boxStyle_default = {
  backgroundColor: Colors.backgroundColor.Textbox,
  width: Layout.textBoxWidth
}
export default function Textbox({ children, font, box = {}, center }) {
  return (
    <Box
      {...box}
      layout={{ ...box.layout, width: Layout.textBoxWidth }}
      style={{
        ...((box || !children) && boxStyle_default),
        ...box
      }}
    >
      <Text style={{ ...font, ...(center && { textAlign: 'center' }) }}>
        {children}
      </Text>
    </Box>
  )
}
