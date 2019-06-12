import React from 'react'
import Box from './Box'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.kitColor.Icon,
  kitSize: GlobalStyle.kitSize.Icon
}

export default function KitBoard({ ...otherProps }) {
  return <Box noBoxcolor {...otherProps} />
}
