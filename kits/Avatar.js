import React from 'react'
import Icon from './Icon'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.skeleton.Avatar.boxColor,
  kitSize: GlobalStyle.skeleton.Avatar.size
}

export default function KitAvatar({ ...otherProps }) {
  return (
    <Icon
      circle
      defaultSize={defaultStyle.kitSize}
      defaultColor={defaultStyle.kitColor}
      {...otherProps}
    />
  )
}
