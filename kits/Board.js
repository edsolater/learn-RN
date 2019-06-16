import React from 'react'
import Kit_Box from './Box'

const skeleton = {
  boxColor: 'hsl(0, 100%, 100%)'
}

export default function KitBoard({ ...Box }) {
  return <Kit_Box noBoxcolor skeleton={skeleton} {...Box} />
}
