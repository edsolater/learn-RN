import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const boxStyle_default = {
  backgroundColor: Colors.textBoxColor,
  width: Layout.textBoxWidth
}
export default function Textbox({ children, font, box, layout, center }) {
  return (
    <View
      style={{
        ...(box || !children ? boxStyle_default : {}),
        ...box,
        ...layout
      }}
    >
      <Text style={{ ...font, ...(center && { textAlign: 'center' }) }}>
        {children}
      </Text>
    </View>
  )
}
