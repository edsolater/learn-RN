import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import store from './redux/store'
import AppContainer from './navigators/AppContainer'

const App = () => (
  <ReduxProvider store={store}>
    <PaperProvider>
      <AppContainer />
    </PaperProvider>
  </ReduxProvider>
)

export default App
