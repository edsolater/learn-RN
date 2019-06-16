import React from 'react'
import { View as Native_View } from 'react-native'


// Box 本省不应该有 skeleton

/**
 * ---------------- 返回组件 ----------------
 */
/**
 * 此乃最根本的自定义kit，理应逻辑非常复杂，
 */
export default function KitBox({
  children,
  skeleton,
  debugMode,

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
  noSkeleton,
  noClipping,
  clipping,
  noBoxcolor,
  absolute, //TODO: 要把这个通过是否Y轴布局智能化
  alignTop,
  alignRight, //组件x轴位置：最右
  alignBottom,
  alignLeft, //组件x轴位置：最左
  alignCenter,
  alignMiddle,
  flex, // 可以的话，纵向占满

  // 元接口
  style,
  ...otherProps
}) {
  /**
   * ---------------- 工具函数（可优化） ----------------
   */
  function merge(detailResult, shortcut) {
    shortcut = Array.of(shortcut).flat()
    function get(array, index) {
      const length = array.length
      while (index + 1 > length) {
        index -= length
      }
      return array[index]
    }
    return detailResult.map((value, index) => value || get(shortcut, index))
  }

  /**
   * ---------------- 处理 props (可优化) ----------------
   */
  // 左右的设定会干扰到居中，故x轴居中时左右设定无效
  left = alignCenter ? undefined : left
  right = alignCenter ? undefined : right
  // 上下的设定会干扰到居中，故y轴居中时上下设定无效
  top = alignMiddle ? undefined : top
  bottom = alignMiddle ? undefined : bottom
  // 决定在什么时候启用 skeleton
  skeleton = !debugMode && noSkeleton ? {} : skeleton  || {}
  console.log('skeleton: ', skeleton)
  // 设定的size与默认的合并
  size = merge(merge([width, height], size), Array.of(skeleton.size).flat())
  // Kit 不应该有默认 location，会增加复杂度的
  location = merge([top, right, bottom, left], location)
  // 启用Y轴方向的定位时，自动 absoluate
  absolute = absolute || alignTop || alignBottom || alignMiddle

  /**
   * ---------------- 返回组件 ----------------
   */
  // <Box> 的核心包裹器，默认状态是无法（逻辑上也不能）y轴居中的
  const content = (
    <Native_View
      style={{
        flex: (typeof flex === 'number' && flex) || (flex && 1),
        width: size[0],
        height: size[1],
        ...(absolute
          ? {
              top: location[0],
              right: location[1],
              bottom: location[2],
              left: location[3]
            }
          : {
              marginTop: location[0],
              marginRight: location[1],
              marginBottom: location[2],
              marginLeft: location[3]
            }),
        alignSelf:
          (alignLeft && 'flex-start') ||
          (alignCenter && 'center') ||
          (alignRight && 'flex-end'),
        borderRadius: round || skeleton.round,
        backgroundColor:
          (noBoxcolor && 'transparent') || boxColor || skeleton.boxColor,
        elevation,
        opacity,
        overflow: (noClipping && 'visible') || (clipping && 'hidden'),
        ...style
      }}
      {...otherProps}
    >
      {children}
    </Native_View>
  )
  //如果是绝对定位，需要再包一层外壳以启用y轴居中
  if (absolute) {
    return (
      <Native_View
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent:
            (alignMiddle && 'center') ||
            (alignLeft && 'flex-start') ||
            (alignRight && 'flex-end')
        }}
      >
        {content}
      </Native_View>
    )
  } else {
    return content
  }
}
