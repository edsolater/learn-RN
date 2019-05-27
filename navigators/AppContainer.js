import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/首页'

const stackNavigator = createStackNavigator(
  {
    // 这个写法太复杂了 Home: { screen: Home }
    Home //充分利用 object properties 的简写与 react-navigation 的简写
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#333',
      headerStyle: { display: 'none'}
    }
  }
)

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer
