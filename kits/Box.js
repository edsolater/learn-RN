import React from 'react'
import { View } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function Box({
  // children
  children,

  // layout
  size,
  location,
  width,
  height,
  top,
  right,
  bottom,
  left,

  // apperance
  round,
  fill,
  shadow,

  // boolean
  center,
  centerX,
  centerY,
  absolute,
  unflex,

  // for debug
  style
}) {
  /**
   * -------------------- 工具函数（可优化） --------------------
   */
  function get(obj, index) {
    if (Array.isArray(obj)) {
      const length = obj.length
      while (obj[index] === undefined) {
        index -= length
      }
      return obj[index]
    } else {
      return obj
    }
  }

  /**
   * -------------------- 处理 props (可优化) --------------------
   */
  // center 代表x轴、y轴都居中
  if (center) centerX = centerY = true

  // 左右的设定会干扰到居中，故x轴居中时左右设定无效
  if (centerX) left = right = undefined

  // 上下的设定会干扰到居中，故y轴居中时上下设定无效
  if (centerY) top = bottom = undefined

  /**
   * -------------------- 返回组件 --------------------
   */
  // <Box> 的核心包裹器，默认状态是无法（逻辑上也不能）y轴居中的
  const boxsize = {
    width: width || get(size, 0),
    height: height || get(size, 1)
  }
  const boxLoaction_normal = {
    marginTop: top || get(location, 0),
    marginRight: right || get(location, 1),
    marginBottom: bottom || get(location, 2),
    marginLeft: left || get(location, 3)
  }
  const boxLocation_absolute = {
    top: top || get(location, 0),
    right: right || get(location, 1),
    bottom: bottom || get(location, 2),
    left: left || get(location, 3)
  }
  const content = (
    <View
      style={{
        ...boxsize,
        ...(absolute ? boxLocation_absolute : boxLoaction_normal),
        alignSelf: (centerX && 'center') || (unflex && 'flex-start'),
        borderRadius: round,
        backgroundColor: fill || Colors.backgroundColor.Box,
        ...style
      }}
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
      >
        {content}
      </View>
    )
  } else {
    return content
  }
}
