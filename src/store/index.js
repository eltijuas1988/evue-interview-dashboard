import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    ),
    preloadedState
  )

  return store
}

export default configureStore
