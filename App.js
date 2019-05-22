import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import store from './redux/store'
import Screens from './components/AppScreens'

const App = () => (
  <ReduxProvider store={store}>
    <PaperProvider>
      <Screens />
    </PaperProvider>
  </ReduxProvider>
)

export default App
