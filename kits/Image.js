import React from 'react'
import { Image as Native_Image } from 'react-native'
import Kit_Box from './Box'

const skeleton = {
  size: [200, 100],
  boxColor: 'hsl(0, 0%, 70%)'
}

export default function KitImage({
  source,
  mode, // 定义图像相对占位图框的内部位置模式

  // Image
  ratio, // 仅在width、height或size没有设置时生效
  size,
  width,
  height,

  style_image,
  proto_image,

  // Box
  circle,
  ...proto
}) {
  /**
   * ---------------- 处理 props (可优化) ----------------
   */
  // 处理尺寸信息，image 指定尺寸需要额外的规则
  size = Array.of(size).flat()
  width = width || size[0]
  height = height || size[1] || size[0]
  // 使用 ratio
  ratio = !width || !height ? ratio : undefined

  return (
    <Kit_Box
      noSkeleton={source}
      width={width}
      height={height}
      round={circle && 10000}
      clipping
      skeleton={skeleton}
      {...proto}
    >
      <Native_Image
        source={source}
        style={{
          width, // undefined 就是值为画框的宽度为0
          height,
          // ...(width ? { width: width } : {}),
          // ...(height ? { height: height } : {}),
          aspectRatio: ratio,
          resizeMode: mode,
          ...style_image
        }}
        {...proto_image}
      />
    </Kit_Box>
  )
}
