import React from 'react'
import { Textbox, Box } from '../../kits'

//---组件设定---//
export default function 搜索栏({ navigation }) {
  return (
    <Box width="50%" height={36} round={4} center>
      <Textbox
        font={{
          color: 'black',
          fontSize: 18
        }}
        amount={8}
        center
        centerInBox
        boxColor="red"
      >
        搜索栏这里有个字
      </Textbox>
    </Box>
  )
}
