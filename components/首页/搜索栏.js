import React from 'react'
import { Textbox, Box } from '../../kits'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'

//---组件设定---//
export default function 搜索栏({ navigation }) {
  return (
    <Box
      size='50%' 
      round={4}
      center
      inflexiable
    >
      <Box>
        <Textbox
          font={{
            color: 'black',
            fontSize: 18
          }}
        >
          搜索栏
        </Textbox>
      </Box>
    </Box>
  )
}
