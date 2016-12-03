import React from 'react'
import { Route } from 'react-router'
import App from './App';
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'

export default (
	<Route path="/" component={App}>
		<Route path="signup" component={Signup} />
		<Route path="login" component={Login} />
		<Route path="logout" component={Logout} />
	</Route>
)