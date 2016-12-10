import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getBasePokemon from '../../actions/pokemons/getBasePokemon'
import setShowShiny from '../../actions/posts/setShowShiny'
import updateRequestedPokemonValues from '../../actions/forms/updateRequestedPokemonValues'
import auth from '../../lib/auth'
import BasePokemon from '../pokemons/BasePokemon'


class NewRequestedPokemon extends Component {
	constructor(props) {
		super(props)
		this.state = {natdexnum: null, min_level: 1, max_level: 100, shiny: false, natures: [], abilities: []}
	}

	componentDidUpdate(){
		this.props.updateRequestedPokemonValues(this.state)
	}

	handleNatDexNumChange(event) {
		event.persist()	//event.persist is required because react gets upset by waiting with setTimeout
			setTimeout(() => {
				let natdexnum = event.target.value
				if (natdexnum){
					this.props.getBasePokemon({natdexnum: natdexnum})
				}
				this.setState({natdexnum: natdexnum, base_pokemon_id: this.props.base_pokemon.id})
			}, 200) //THIS INTEGER ACCOUNTS FOR SHITTY TYPING
		}

	handleMinLevelChange(event) {
		this.setState({min_level: event.target.value})
	}
	handleMaxLevelChange(event) {
		this.setState({max_level: event.target.value})
	}

	handleNaturesChange(event) {
		this.setState({natures: [event.target.value]})
	}

	handleAbilitiesChange(event) {
		this.setState({abilities: [event.target.value]})
	}

	handleShinyChange(event) {
		this.props.setShowShiny(event.target.checked)
		this.setState({shiny: event.target.checked})
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

		return(
			<div className="newRequestedPokemon">
				<h3>What Pokemon do you want?</h3>
				<BasePokemon />
				<label>Pokedex Number(1-12): </label>
				<input type="integer" placeholder="#" onChange={this.handleNatDexNumChange.bind(this)}/> <input type="checkbox" value="shiny" onChange={this.handleShinyChange.bind(this)}/> Shiny?
				<br />
				<label>Min Level: </label>
				<input type="intger" placeholder="Min Level" onChange={this.handleMinLevelChange.bind(this)}/>
				-
				<input type="intger" placeholder="Max Level" onChange={this.handleMaxLevelChange.bind(this)}/>
				<label>:Max Level</label>
				<br />
				<label>Select a Nature: </label>
				<select onChange={this.handleNaturesChange.bind(this)}>
					{this.listNatures()}
				</select>
				<br />
				<label>Select an Ability: </label>
				<select onChange={this.handleAbilitiesChange.bind(this)}>
					{this.listAbilities()}
				</select>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getBasePokemon, setShowShiny, updateRequestedPokemonValues }, dispatch)
}

function mapStateToProps(state) {
	return {
		natures: state.basePokemon.natures,
		abilities: state.basePokemon.abilities,
		base_pokemon: state.basePokemon.base_pokemon,
	}
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(NewRequestedPokemon))
