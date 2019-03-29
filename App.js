import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import store from './src/data/store'
import Index from './src/components'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Index />
      </PaperProvider>
    </ReduxProvider>
  )
}

export default App
