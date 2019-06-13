import React from 'react'
import Box from './Box'
import { GlobalStyle } from '../constants'

const thisKitSkeleton = GlobalStyle.skeleton.Board

export default function KitBoard({ ...otherProps }) {
  return <Box noBoxcolor skeleton={thisKitSkeleton} {...otherProps} />
}
