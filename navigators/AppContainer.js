import { createStackNavigator, createAppContainer } from 'react-navigation'
import * as screens from '../screens/__all__'

const stackNavigator = createStackNavigator(
  screens,
  {
    initialRouteName: '首页',
    defaultNavigationOptions: {
      headerTintColor: '#333',
      // headerStyle: { display: 'none'}
    }
  }
)

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer
