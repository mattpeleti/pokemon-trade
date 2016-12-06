import React from 'react'
import { Route } from 'react-router'
import App from './App';
import Signup from './components/Signup'
import Login from './components/Login'
import NewPost from './components/posts/NewPost'
import NewPokemon from './components/pokemons/NewPokemon'

export default (
	<Route path="/" component={App}>
		<Route path="signup" component={Signup} />
		<Route path="login" component={Login} />
		<Route path="posts">
			<Route path="new" component={NewPost} />
		</Route>
		<Route path="pokemon">
			<Route path="new" component={NewPokemon} />
		</Route>
	</Route>
)
