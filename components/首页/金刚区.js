import React from 'react'
import { Icon, Board, Text, Button, Image, Card, ImageCard } from '../../kits'

const images = [
  {
    source: require('../../assets/images/类.png'),
    name: '类',
    destination: '商品分类'
  },
  {
    source: require('../../assets/images/新.png'),
    name: '新',
    destination: '新品榜'
  },
  {
    source: require('../../assets/images/热.png'),
    name: '热',
    destination: '热销榜'
  },
  {
    source: require('../../assets/images/飙.png'),
    name: '飙',
    destination: '飙升榜'
  },
  {
    source: require('../../assets/images/更.png'),
    name: '更',
    destination: '更多'
  }
]

export default function This({ navigation }) {
  return (
    <Board
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
      }}
    >
      {images.map(({ source, name, destination }) => (
        <Image
          key={name}
          source={source}
          onPress={() => navigation.navigate(destination)}
          size={24}
          mode="stretch"
        />
      ))}
      <Image
        width='100%'
        ratio={3}
        source={require('../../assets/images/默认头像.png')}
      />
      <Icon boxColor="red" label="hehe" />
      <Button Icon={{}} label="hello" />
      <ImageCard
        height={80}
        ratio={2}
        noSkeleton
        source={require('../../assets/images/默认头像.png')}
        debugMode
      />
      <Card />
    </Board>
  )
}
