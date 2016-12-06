import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createPokemon from '../../actions/pokemons/createPokemon'
import auth from '../../lib/auth'

class NewPokemon extends Component {
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
		this.props.createPokemon(this.state)
	}

	render() {
		return(
			<div className="newPokemon">
				<p>Create Pokemon</p>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Enter a national dex number(1-12)</label>
					<input type="integer" placeholder="#" onChange={this.handleNatDexNumChange.bind(this)}/> {/* event.target.value will be the natdexnum */}
					<input type="text" placeholder="Nickname" onChange={this.handleNicknameChange.bind(this)}/>
					<input type="intger" placeholder="Level" onChange={this.handleLevelChange.bind(this)}/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createPokemon}, dispatch)
}

function mapStateToProps(state) {
	return {trade_post_id: state.posts.new_post_id}

}

export default auth(connect(mapStateToProps, mapDispatchToProps)(NewPokemon))
