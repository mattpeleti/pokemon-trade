import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getBasePokemon from '../../actions/pokemons/getBasePokemon'
import getNatures from '../../actions/pokemons/getNatures'
import createPokemon from '../../actions/pokemons/createPokemon'
import setShowShiny from '../../actions/posts/setShowShiny'
import auth from '../../lib/auth'
import BasePokemon from './BasePokemon'
import {FormGroup, FormControl} from 'react-bootstrap'


class NewPokemon extends Component {
	constructor(props) {
		super(props)
		this.state = {natdexnum: 1, nickname: "", level: null, nature: null, ability: null, shiny: false}
	}

	loaded(){
		return !!this.props.natures[0]
	}

	componentWillMount(){
		this.props.setShowShiny(false)
		this.props.getBasePokemon({natdexnum: 1})
		if(!this.loaded()){
			this.props.getNatures()
		}
	}

	// componentWillUpdate() {
	// 	debugger
	// 	if(this.props.abilities[0]){
	// 		this.state = {...this.state, ability: this.props.abilities[0]}
	// 		// this.state = {...this.state, ability: this.props.abilities[0]}
	// 	}
	// }

	handleNatDexNumChange(event) {
		event.persist()	//event.persist is required because react gets upset by waiting with setTimeout
			setTimeout(() => {
				let natdexnum = event.target.value
				if (natdexnum){
					this.props.getBasePokemon({natdexnum: natdexnum})
				}
				this.setState({natdexnum: natdexnum})
			}, 200) //THIS INTEGER ACCOUNTS FOR SHITTY TYPING
		}

	handleNicknameChange(event) {
		this.setState({nickname: event.target.value})
	}

	handleLevelChange(event) {
		this.setState({level: event.target.value})
	}

	handleNatureChange(event) {
		this.setState({nature: event.target.value})
	}

	handleAbilityChange(event) {
		this.setState({ability: event.target.value})
	}

	handleShinyChange(event) {
		this.props.setShowShiny(event.target.checked)
		this.setState({shiny: event.target.checked})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createPokemon(this.state)
		browserHistory.push(`/users/${this.props.currentUser.id}/pokemon`)
	}

	listNatures() {
		return this.props.natures.map((nature) => {
			return <option key={nature.id} value={nature.id}>{nature.name}</option>
		})
	}

	listAbilities() {
		return this.props.abilities.map((ability) => {
			return <option key={ability.id} value={ability.id}>{ability.name}</option>
		})
	}

	render() {

		return( this.loaded() ? (
			<div className="newPokemon">
				<form className="PokeForm" onSubmit={this.handleSubmit.bind(this)}>
					<h3>Create a Pokemon</h3>
					<BasePokemon />
					<label>Pokedex Number(1-12): </label>
					<input type="integer" placeholder="#" onChange={this.handleNatDexNumChange.bind(this)}/> <input type="checkbox" value="shiny" onChange={this.handleShinyChange.bind(this)}/> Shiny?
					<br />
					<label>Nickname: </label>
					<input type="text" placeholder="Nickname" onChange={this.handleNicknameChange.bind(this)} />
					<br />
					<label>Level: </label>
					<input type="integer" placeholder="Level" onChange={this.handleLevelChange.bind(this)}/>
					<br />
					<label>Select a Nature: </label>
					<select onChange={this.handleNatureChange.bind(this)}>
						<option key={666} value={null}>---</option>
						{this.listNatures()}
					</select>
					<br />
					<label>Select an Ability: </label>
					<select onChange={this.handleAbilityChange.bind(this)}>
						<option key={666} value={null}>---</option>
						{this.listAbilities()}
					</select>
					<br />
					<input className="SubmitStyle" type="submit" />
				</form>
			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createPokemon, getBasePokemon, setShowShiny, getNatures }, dispatch)
}

function mapStateToProps(state) {
	return {
		natures: state.basePokemon.natures,
		abilities: state.basePokemon.abilities,
		basePokemon: state.basePokemon.base_pokemon,
		currentUser: state.users.currentUser
	}
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(NewPokemon))
