import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'

const stackNavigator = createStackNavigator(
  {
    // 这个写法太复杂了 Home: { screen: Home }
    Home //充分利用 object properties 的简写与 react-navigation 的简写
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#333',
      headerStyle: { backgroundColor: '#eff' }
    }
  }
)

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer
