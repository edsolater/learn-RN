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
  rootElementStyle_view,
  rootElement_view,
  
  // StatusBar相关
  screenBackgroundColor = defaultStyle.backgroundColor,
  statusBarIconTheme = defaultStyle.statusBarIconTheme,
  rootElementStyle_statusBar,
  rootElement_statusBar,

  // ScrollView相关
  rootElementStyle_scrollView,
  rootElement_scrollView,

}) {
  return (
    <View style={{ flex: 1, ...rootElementStyle_view }} {...rootElement_view}>
      <StatusBar
        barStyle={`${statusBarIconTheme}-content`}
        style={{ ...rootElementStyle_statusBar }}
        {...rootElement_statusBar}
      />
      <ScrollView
        style={{
          backgroundColor: screenBackgroundColor,
          ...rootElementStyle_scrollView
        }}
        {...rootElement_scrollView}
      >
        {children}
      </ScrollView>
      {Navbar}
    </View>
  )
}
