import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createPost from '../../actions/posts/createPost'
import initPost from '../../actions/posts/initPost'
import NewPostPokemon from './NewPostPokemon'
import auth from '../../lib/auth'
import $ from 'jquery'

class NewPost extends Component {
	constructor(props){
		super(props)
		this.state = {id: null, title: "", description: "", postPokemonId: null, reqPokemonId: null, renderPostPokeform: false}

	}

	componentWillMount(){
		this.props.initPost()
		this.setState({id: this.props.id})
	}

	// componentDidMount(){
	// 	if(this.state.id === null){
	// 		this.props.initPost()
	// 	}
	// }

	handleTitleChange(event) {
		this.setState({title: event.target.value})
	}

	handleDescriptionChange(event) {
		this.setState({description: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(this.props.id)
			// () => {
			// 	$('.newPostPokemon').show(500)
			// }
		this.setState({renderPostPokeform: true})
	}

	renderPostPokemonForm(){
		if(this.state.renderPostPokeform){
			return <NewPostPokemon />
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label> Post Title </label>
					<input type="text" placeholder="Title" onChange={this.handleTitleChange.bind(this)}/>
					<label> Post Description</label>
					<input type="text" placeholder="Description" onChange={this.handleDescriptionChange.bind(this)}/>
					<input type="submit"/>
				</form>
				{this.renderPostPokemonForm()}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createPost, initPost}, dispatch)
}

function mapStateToProps(state) {
	return {id: state.posts.new_post_id}

}

export default auth(connect(mapStateToProps, mapDispatchToProps)(NewPost))
