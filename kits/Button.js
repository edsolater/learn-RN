import React from 'react'
import Kit_Image from './Image'
import Kit_Text from './Text' // 必须
import Kit_Card from './Card' // proto

const skeleton = {
  size: [96, 36],
  boxColor: 'hsl(0, 0%, 30%)'
}
const iconSkeleton = {
  size: 24,
  boxColor: 'hsl(0, 0%, 80%)'
}

export default function Kit_Button({
  direction = 'row', //规定内部元素的排布方向
  label, // 快捷方式：标识的内容
  source, // 快捷方式： Icon的source
  gutter = 8,
  debugMode, // 需要分别传递给每个 box，因此显式设置

  // 完全传递给 <Icon> 组件
  Icon,
  // 完全传递给 <Text> 组件
  Label,

  // Box 相关设定
  style,
  ...proto
}) {
  return (
    <Kit_Card
      round={skeleton.round}
      skeleton={skeleton}
      style={{
        flexDirection: direction,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        ...style
      }}
      {...proto}
    >
      {(Icon || source) && (
        <Kit_Image
          circle={!source}
          source={source}
          {...(direction === 'row' ? { right: gutter } : { bottom: gutter })}
          skeleton={iconSkeleton}
          debugMode={debugMode}
          {...Icon}
        />
      )}
      <Kit_Text
        width="auto" // 开发此 Kit 时需要
        color={'white'}
        fontSize={24}
        debugMode={debugMode}
        text={label}
        {...Label}
      />
    </Kit_Card>
  )
}
