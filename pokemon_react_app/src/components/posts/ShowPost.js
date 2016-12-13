import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import Pokemon from '../pokemons/Pokemon'
import getPost from '../../actions/posts/getPost'

class ShowPost extends Component {

	componentWillMount(){
		if(!this.loaded()) {
			this.props.getPost(this.props.params.post_id)
		}
	}

	loaded() {
		debugger
		return (this.props.post && this.props.post.id) == this.props.params.post_id
	}

	render() {
		return( this.loaded() ? (
			<div>
				<h3>This is the {this.props.post.id} post</h3>
			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts.showPost.post,
		requestedPokemon: state.posts.showPost.requestedPokemon,
		postPokemon: state.posts.showPost.postPokemon

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getPost }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(ShowPost))
