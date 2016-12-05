import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createPostPokemon from '../../actions/posts/createPostPokemon'
import auth from '../../lib/auth'

class CreatePostPokemon extends Component {
	constructor(props) {
		super(props)
		this.state = {natdexnum: null, nickname: "", level: null, trade_post_id: props.trade_post_id}
	}

	handleNatDexNumChange(event) {
		this.setState({natdexnum: event.target.value})
	}

	handleNicknameChange(event) {
		this.setState({nickname: event.target.value})
	}

	handleLevelChange(event) {
		this.setState({level: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createPostPokemon(this.state)
	}

	render() {
		return(
			<div className="newPostPokemon">
				<p>Create Post Pokemon</p>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Enter a national dex number(1-12)</label>
					<input type="integer" placeholder="1" onChange={this.handleNatDexNumChange.bind(this)}/> {/* event.target.value will be the natdexnum */}
					<input type="text" placeholder="Nickname" onChange={this.handleNicknameChange.bind(this)}/>
					<input type="intger" placeholder="Level" onChange={this.handleLevelChange.bind(this)}/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createPostPokemon}, dispatch)
}

function mapStateToProps(state) {
	return {trade_post_id: state.posts.new_post_id}

}

export default auth(connect(mapStateToProps, mapDispatchToProps)(CreatePostPokemon))
