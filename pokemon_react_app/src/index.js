import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import routes from './routes';
import { Router, browserHistory } from 'react-router'
import './index.css';

const store = configureStore()
window.localStorage.removeItem("jwt")

ReactDOM.render(
	<Provider store={store}>
  	<Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
