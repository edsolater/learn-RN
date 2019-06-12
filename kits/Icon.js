import React from 'react'
import Image from './Image'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.kitColor.Icon,
  kitSize: GlobalStyle.kitSize.Icon
}

export default function KitIcon({
  defaultSize,
  defaultColor,

  circle,
  rect,
  source,
  rootProps,
  rootProps_Image = rootProps,
  ...otherProps
}) {
  return (
    <Image
      circle={!rect || circle || !source}
      source={source}
      defaultSize={defaultSize || defaultStyle.kitSize}
      defaultColor={defaultColor || defaultStyle.kitColor}
      rootProps_Box={rootProps_Image}
      {...otherProps}
    />
  )
}
