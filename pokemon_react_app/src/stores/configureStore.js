import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = composeWithDevTools({})

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}