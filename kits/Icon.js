import React from 'react'
import Image from './Image'
import { GlobalStyle } from '../constants'

const thisKitSkeleton = GlobalStyle.skeleton.Icon

export default function KitIcon({
  circle, // TODO: 要把这几个属性都去掉
  rect, // TODO: 要把这几个属性都去掉
  source, // TODO: 要把这几个属性都去掉
  rootProps,
  rootProps_Image = rootProps,
  ...otherProps
}) {
  return (
    <Image
      circle={!rect || circle || !source}
      source={source}
      skeleton={thisKitSkeleton}
      rootProps_Box={rootProps_Image}
      {...otherProps}
    />
  )
}
