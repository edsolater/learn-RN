import React from 'react'
import { Text, Box } from '../../kits'

//---组件设定---//
export default function 搜索栏({ navigation }) {
  return (
    <Box round={4} alignCenter>
      <Text fontType="main" wordNum={8} alignCenter text="搜索栏这里有九个字" />
    </Box>
  )
}
