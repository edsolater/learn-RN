import React from 'react'
import Icon from './Icon'
import { GlobalStyle } from '../constants'

const thisKitSkeleton = GlobalStyle.skeleton.Avatar

export default function KitAvatar({ source,...otherProps }) {
  return (
    <Icon
      circle
      noClipping={source}
      skeleton={thisKitSkeleton}

      source={source}
      {...otherProps}
    />
  )
}
