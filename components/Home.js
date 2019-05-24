import React from 'react'
import Title from './Home__Title'

function HomeScreen({ navigation }) {
  return <Title navigation={navigation} />
}

HomeScreen.navigationOptions = function({ navigation, navigationOptions }) {
  return {
    title: navigation.getParam('title', '') + 'haha',
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor
  }
}

export default HomeScreen
