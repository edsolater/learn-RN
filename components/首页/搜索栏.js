import React from 'react'
import { Text, Box } from '../../kits'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'

//---组件设定---//
export default function 搜索栏({ navigation }) {
  return (
    <Box
      size= '50%' 
      fill='red'
      round={4}
      center
      inflexiable
    >
      <Box>
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
