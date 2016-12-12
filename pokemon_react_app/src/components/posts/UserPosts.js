import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Pokemon from '../pokemons/Pokemon'
import post from './Post'
import getPokemons from '../../actions/pokemons/getPokemons'
import getUserPosts from '../../actions/posts/getUserPosts'

class UserPosts extends Component {

	loaded() {
		debugger
		return !!this.props.userPosts
	}

	componentWillMount() {

		if(!this.loaded()) {
			this.props.getUserPosts()
		}
	}



	// renderUserPosts() {
	// 	return this.props.userPosts.map((post) => {
	// 		let ability = this.findAbilityOf(post.id)
	// 		let nature = this.findNatureOf(post.id)
	// 		let basePokemon = this.findBasePokemonOf(post.id)

	// 		return <Post post={post} postPokemon={ability, nature, basePokemon}/>
	// 	})
	// }

	render() {

		return( this.loaded() ? (
			<div>
				<h3>User's Posts</h3>

			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapStateToProps(state) {
	return {
		pokemons: state.pokemon.pokemons,
		abilities: state.pokemon.abilities,
		natures: state.pokemon.natures,
		basePokemons: state.pokemon.basePokemons,
		userPosts: state.posts.userPosts
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getPokemons, getUserPosts }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(UserPosts))
