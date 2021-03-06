import React from 'react'
import Kit_Image from './Image' // 必须
import Kit_Text from './Text'
import Kit_Card from './Card' // proto

const skeleton = {
  boxColor: 'hsl(0, 0%, 90%)'
}
const iconSkeleton = {
  size: 24,
  boxColor: 'hsl(0, 0%, 80%)'
}

export default function Kit_ImageCard({
  direction = 'column', //规定内部元素的排布方向
  source, // Image 的快捷方式内容
  dia=48, // Icon的直径; Image 的快捷方式内容
  label, // Label 的快捷方式字符串内容
  debugMode,

  // 完全传递给 <Icon>
  Icon,
  // 完全传递给 <Text>
  Label,

  // Box 相关设定
  style, // 因为会手动设置，所以需要指明此参数。但跟 <Box> 的 style 一样
  ...proto // 完全传递给根组件 <Card>
}) {
  return (
    <Kit_Card
      round={skeleton.round}
      skeleton={skeleton}
      debugMode={debugMode}
      round={10000}
      style={{
        flexDirection: direction,
        aspectRatio:1, // Icon 的skeleton 会是一个自适应的原型
        ...style
      }}
      {...proto}
    >
      <Kit_Image
        circle={!source}
        debugMode={debugMode}
        source={source}
        size={dia}
        skeleton={iconSkeleton}
        {...Icon}
      />
      {(label || Label) && (
        <Kit_Text
          width="auto" // 开发此 Kit 时需要
          color={'white'}
          fontSize={12}
          debugMode={debugMode}
          text={label}
          {...Label}
        />
      )}
    </Kit_Card>
  )
}
