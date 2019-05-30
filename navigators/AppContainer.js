import { createStackNavigator, createAppContainer } from 'react-navigation'
import * as screens from '../screens'

const stackNavigator = createStackNavigator(
  screens,
  {
    initialRouteName: '我',
    defaultNavigationOptions: {
      headerTintColor: '#333',
      // headerStyle: { display: 'none'}
    }
  }
)

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer
