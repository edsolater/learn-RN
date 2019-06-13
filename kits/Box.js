import React from 'react'
import { View } from 'react-native'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const thisKitSkeleton = GlobalStyle.skeleton.Box

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
  hideSkeleton,
  noClipping,
  clipping,
  noBoxcolor,
  absolute, //TODO: 要把这个通过是否Y轴布局智能化
  alignLeft, //组件x轴位置：最左
  center, //组件x轴位置：居中（必要的话也会y轴居中）
  centerX,
  centerY,
  alignRight, //组件x轴位置：最右
  flex, // 可以的话，纵向占满

  // 元接口
  style,
  rootStyle_view = style,
  rootProps_view,
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
  // center 代表x轴、y轴都居中
  if (center) centerX = centerY = true
  // 左右的设定会干扰到居中，故x轴居中时左右设定无效
  if (centerX) left = right = undefined
  // 上下的设定会干扰到居中，故y轴居中时上下设定无效
  if (centerY) top = bottom = undefined

  // 处理 skeleton
  skeleton = !debugMode && hideSkeleton ? {} : skeleton || thisKitSkeleton || {}

  // 处理尺寸信息
  size = merge(merge([width, height], size), Array.of(skeleton.size).flat())

  // 处理相对位置
  location = merge([top, right, bottom, left], location)

  /**
   * ---------------- 返回组件 ----------------
   */
  // <Box> 的核心包裹器，默认状态是无法（逻辑上也不能）y轴居中的
  const content = (
    <View
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
          (centerX && 'center') ||
          (alignRight && 'flex-end'),
        borderRadius: round || skeleton.round,
        backgroundColor:
          (noBoxcolor && 'transparent') || boxColor || skeleton.boxColor,
        elevation,
        opacity,
        overflow: (noClipping && 'visible') || (clipping && 'hidden'),
        ...rootStyle_view
      }}
      {...rootProps_view}
      {...otherProps}
    >
      {children}
    </View>
  )
  //如果是绝对定位，需要再包一层外壳以启用y轴居中
  console.log('absolute: ', absolute)
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
        {...rootProps_view}
      >
        {content}
      </View>
    )
  } else {
    return content
  }
}
