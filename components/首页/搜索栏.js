import React from 'react'
import { Text, Box } from '../../kits'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'

//---组件设定---//
export default function 搜索栏({ navigation }) {
  return (
    <Box
      layout={{ size: '50%' }}
      apperance={{ fill: 'red', rounded: 4 }}
      center
    >
      <Box
        layout={{ left: 28 }}
        apperance={{ fill: 'hsla(50, 0%, 90%, 0.8)' }}
        center
        absolute
      >
        <Text
          layout={{}}
          font={{
            color: 'black',
            fontSize: 18
          }}
        >
          搜索栏
        </Text>
      </Box>
    </Box>
  )
}
