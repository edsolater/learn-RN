import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import { GlobalStyle } from '../constants'

/**
 * ---------------- 组件的可自定义配置 ----------------
 */
const defaultStyle = {
  backgroundColor: GlobalStyle.defaultColor.ScreenBackground,
  statusBarIconTheme: 'light'
}

export default function Screen({
  children,

  // 被传递的组件
  Navbar,

  // View相关
  rootStyle_view,
  rootProps_view,

  // StatusBar相关
  screenBackgroundColor = defaultStyle.backgroundColor,
  statusBarIconTheme = defaultStyle.statusBarIconTheme,
  rootStyle_statusBar,
  rootProps_statusBar,

  // ScrollView相关
  style,
  rootStyle_scrollView = style,
  rootProps_scrollView
}) {
  return (
    <View style={{ flex: 1, ...rootStyle_view }} {...rootProps_view}>
      <StatusBar
        barStyle={`${statusBarIconTheme}-content`}
        style={{ ...rootStyle_statusBar }}
        {...rootProps_statusBar}
      />
      <ScrollView
        style={{
          backgroundColor: screenBackgroundColor,
          ...rootStyle_scrollView
        }}
        {...rootProps_scrollView}
      >
        {children}
      </ScrollView>
      {Navbar}
    </View>
  )
}
