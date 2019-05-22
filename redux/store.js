import { createStore } from 'redux'
import rootReducer from './reducers'


const initialState = {
  info:{
    open: true
  }
}

export default createStore(rootReducer, initialState)
