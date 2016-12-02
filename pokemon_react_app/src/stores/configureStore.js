import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import /* ROOT REDUCER */ from '../reducers/some_reducer'
const composeEnhancers = composeWithDevTools({});

export default function configureStore() {
  return createStore(/* ROOT REDUCER */, composeEnhancers(applyMiddleware(thunk)))
}