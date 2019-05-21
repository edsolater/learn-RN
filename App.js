import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import store from './src/redux/store'
import Screens from './src'

const App = () => (
  <ReduxProvider store={store}>
    <PaperProvider>
      <Screens />
    </PaperProvider>
  </ReduxProvider>
)

export default App
