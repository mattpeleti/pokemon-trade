import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import Pokemon from '../pokemons/Pokemon'
class ShowPost extends Component {


	loaded() {
		return true	// return (this.props.[0] && this.props.abilities[0] add proper props later
	}

	render() {
		return( this.loaded() ? (
			<div>
				<h3>This is the show post</h3>
			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.userPosts,
		requestedPokemon: state.posts.requestedPokemon,
		// postPokemon: state.pokemon.pokemons

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ }, dispatch)
}

export default auth(ShowPost)
