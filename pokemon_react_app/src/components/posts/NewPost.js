import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createPost from '../../actions/posts/createPost'

class NewPost extends Component {
	constructor(props){
		super(props)
		this.state = {title: "", postPokemon: {}, reqPokemon: {}}
	}

	handleTitleChange(event) {
		this.setState({title: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createPost(this.state)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label> Post Title </label>
					<input type="text" placeholder="Title" onChange={this.handleTitleChange.bind(this)}/>
					<input type="submit"/>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createPost: createPost}, dispatch)
}

export default connect(null, mapDispatchToProps)(NewPost)
