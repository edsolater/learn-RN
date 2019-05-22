import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'

const stackNavigator = createStackNavigator({
  Home: { screen: Home }
})

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer
