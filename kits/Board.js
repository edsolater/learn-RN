import React from 'react'
import Box from './Box'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  kitColor: GlobalStyle.kitColor.Icon,
  kitSize: GlobalStyle.kitSize.Icon
}

export default function KitBoard({
  defaultSize,
  defaultColor,
  children,

  circle,
  rect,
  source,
  rootProps,
  rootProps_Image = rootProps,
  ...otherProps
}) {
  return (
    <Image
      circle={!source || !rect || circle}
      source={source}
      defaultSize={defaultSize || defaultStyle.kitSize}
      defaultColor={defaultColor || defaultStyle.kitColor}
      rootProps_Box={rootProps_Image}
      {...otherProps}
    />
  )
}
