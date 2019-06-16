import React from 'react'
import Kit_Image from './Image' // 必须
import Kit_Text from './Text'
import Kit_Card from './Card' // proto

const skeleton = {
  size: [120, 60],
  boxColor: 'hsl(0, 0%, 90%)'
}
const imageSkeleton = {
  size: ['100%'],
  boxColor: 'hsl(0, 0%, 80%)'
}

export default function Kit_ImageCard({
  direction = 'column', //规定内部元素的排布方向
  source, // Image 的快捷方式内容
  label, // Label 的快捷方式字符串内容
  ratio,
  debugMode,
  width,
  height,

  // 完全传递给 <Icon>
  Image,
  // 完全传递给 <Text>
  Label,

  // Box 相关设定
  style, // 因为会手动设置，所以需要指明此参数。但跟 <Box> 的 style 一样
  ...proto // 完全传递给根组件 <Card>
}) {
  return (
    <Kit_Card
      skeleton={skeleton}
      width={width}
      height={height}
      style={{
        flexDirection: direction,
        ...style
      }}
      {...proto}
    >
      <Kit_Image
        ratio={ratio}
        width={width}
        height={!label && !Label ? height : undefined}
        skeleton={imageSkeleton}
        debugMode={debugMode}
        source={source}
        {...Image}
      />
      {(label || Label) && (
        <Kit_Text
          width="auto" // 开发此 Kit 时需要
          color={'white'}
          fontSize={24}
          debugMode={debugMode}
          text={label}
          {...Label}
        />
      )}
    </Kit_Card>
  )
}
