import React from 'react'
import Icon from './Icon'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.kitColor.Avatar,
  kitSize: GlobalStyle.kitSize.Avatar
}

export default function KitBoard({ ...otherProps }) {
  return (
    <Icon
      circle
      defaultSize={defaultStyle.kitSize}
      defaultColor={defaultStyle.kitColor}
      {...otherProps}
    />
  )
}
