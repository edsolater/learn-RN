import React from 'react'
import { View } from 'react-native'
import { GlobalStyle } from '../constants'

const defaultStyle = {
  boxColor: GlobalStyle.boxColor.Box
}

/**
 * 此乃最根本的自定义kit，理应逻辑非常复杂，
 */
export default function Box({
  children,

  // 尺寸、位置
  size, // 快捷属性
  width,
  height,
  location, // 快捷属性
  top,
  right,
  bottom,
  left,

  // 外观
  round,
  boxColor,
  opacity,
  elevation, //Android 设置阴影的

  // 快速开启某些特性
  noClipping,
  noBoxcolor,
  absolute,
  start, //组件x轴位置：最左
  center, //组件x轴位置：居中（必要的话也会y轴居中）
  centerX,
  centerY,
  end, //组件x轴位置：最右
  flex, // 可以的话，纵向占满

  // 元接口
  style,
  rootElementStyle_view = style,
  rootElement_view
}) {
  /**
   * ---------------- 工具函数（可优化） ----------------
   */
  // 暂无

  /**
   * ---------------- 处理 props (可优化) ----------------
   */
  // 设置了 noBoxcolor box就变成全透明的了
  if (noBoxcolor) boxColor = 'transparent'

  // center 代表x轴、y轴都居中
  if (center) centerX = centerY = true

  // 左右的设定会干扰到居中，故x轴居中时左右设定无效
  if (centerX) left = right = undefined

  // 上下的设定会干扰到居中，故y轴居中时上下设定无效
  if (centerY) top = bottom = undefined

  // 处理尺寸信息
  size = Array.of(size).flat()
  width = width || size[0] || size[0]
  height = height || size[1] || size[0]

  // 处理位置信息（相对）
  location = Array.of(location).flat()
  top = top || location[0]
  right = right || location[1] || location[0]
  bottom = bottom || location[2] || top || location[0]
  left = left || location[3] || right || location[0]

  /**
   * ---------------- 返回组件 ----------------
   */
  // <Box> 的核心包裹器，默认状态是无法（逻辑上也不能）y轴居中的
  const content = (
    <View
      style={{
        flex: (typeof flex === 'number' && flex) || (flex && 1),
        width,
        height,
        ...(absolute
          ? {
              top: top,
              right: right,
              bottom: bottom,
              left: left
            }
          : {
              marginTop: top,
              marginRight: right,
              marginBottom: bottom,
              marginLeft: left
            }),
        alignSelf:
          (start && 'flex-start') ||
          (centerX && 'center') ||
          (end && 'flex-end'),
        borderRadius: round,
        backgroundColor: boxColor || defaultStyle.boxColor,
        elevation,
        opacity,
        overflow: noClipping || 'hidden',
        ...rootElementStyle_view
      }}
      {...rootElement_view}
    >
      {children}
    </View>
  )
  //如果是绝对定位，需要再包一层外壳以启用y轴居中
  if (absolute) {
    return (
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: centerY && 'center'
        }}
        {...rootElement_view}
      >
        {content}
      </View>
    )
  } else {
    return content
  }
}
