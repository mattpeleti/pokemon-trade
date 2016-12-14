import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import Pokemon from '../pokemons/Pokemon'
import RequestedPokemon from '../pokemons/RequestedPokemon'
import getPost from '../../actions/posts/getPost'

class ShowPost extends Component {

	componentWillMount(){
		if(!this.loaded()) {
			this.props.getPost(this.props.params.post_id)
		}
	}

	loaded() {
		return (this.props.post && this.props.post.id) == this.props.params.post_id
	}

	render() {
		return( this.loaded() ? (
			<div className="ShowPost">
				<h3>{this.props.post.title}</h3>
				<h4>posted by {this.props.user.username}</h4>
				<div className="five columns">
					<Pokemon pokemon={this.props.postPokemon} ability={this.props.postPokemon.ability} nature={this.props.postPokemon.nature} basePokemon={this.props.postPokemon.base_pokemon} />
				<div className="two columns" id="description">
					<p>{this.props.post.description}</p>
				</div>
				</div>
				<div className="five columns">
					<RequestedPokemon reqPokemon={this.props.requestedPokemon} abilities={this.props.requestedPokemon.abilities} natures={this.props.requestedPokemon.natures} basePokemon={this.props.requestedPokemon.base_pokemon} />
				</div>
				<br />
				<div className="twelve columns">
					<h4>Pending Offers:</h4>
					<p>Get some offers in here</p>
				</div>
			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapStateToProps(state) {
	return {
		user: state.posts.showPost.user,
		post: state.posts.showPost.post,
		requestedPokemon: state.posts.showPost.requestedPokemon,
		postPokemon: state.posts.showPost.postPokemon
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getPost }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(ShowPost))
