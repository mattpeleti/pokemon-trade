import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import NewPost from './components/posts/NewPost'
import UserPosts from './components/posts/UserPosts'
import NewPokemon from './components/pokemons/NewPokemon'
import Inventory from './components/pokemons/Inventory'
import ShowUser from './components/users/ShowUser'
import EditUser from './components/users/EditUser'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="signup" component={Signup} />
		<Route path="login" component={Login} />
		<Route path="posts">
			<Route path="new" component={NewPost} />
		</Route>
		<Route path="pokemon">
			<Route path="new" component={NewPokemon} />
		</Route>
		<Route path="users/:id" component={ShowUser}>
			<Route path="edit" component={EditUser} />
			<Route path="pokemon" component={Inventory} />
			<Route path="posts" component={UserPosts} />
		</Route>
	</Route>
)
