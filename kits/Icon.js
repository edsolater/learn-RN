import React from 'react'
import Image from './Image'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.kitColor.Icon,
  kitSize: GlobalStyle.kitSize.Icon
}

export default function Text({
  defaultSize,
  defaultColor,

  source,
  icon = source,
  ...otherProps
}) {
  return (
    <Image
      source={icon}
      defaultSize={defaultSize || defaultStyle.kitSize}
      defaultColor={defaultColor || defaultStyle.kitColor}
      {...otherProps}
    />
  )
}
