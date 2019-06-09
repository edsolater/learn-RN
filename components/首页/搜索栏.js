import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Textbox, Box } from '../../kits/__all__'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'

//---组件设定---//
export default function 搜索栏({ navigation }) {
  return (
    <Box
      layout={{ height: 32, right: 28, left: 40 }}
      apperance={{ fill: 'red', rounded: 4 }}
      box={{}}
    >
      <Textbox
        font={{
          color: 'black',
          fontSize: 18
        }}
        layout={{}}
        center
      >
        搜索栏
      </Textbox>
    </Box>
  )
}
