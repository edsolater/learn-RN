import React from 'react'
import Box from './Box'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.skeleton.Board.boxColor
}

export default function KitBoard({ ...otherProps }) {
  return <Box noBoxcolor boxColor={defaultStyle.kitColor} {...otherProps} />
}
