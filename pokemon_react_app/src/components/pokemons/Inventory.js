import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Pokemon from './Pokemon'
import getPokemons from '../../actions/pokemons/getPokemons'

class Inventory extends Component {

	findAbilityOf(pokemonId){
		return this.props.abilities.find((ability) => {
			return ability.pokemon_id === pokemonId
		})
	}

	findNatureOf(pokemonId){
		return this.props.natures.find((nature) => {
			return nature.pokemon_id === pokemonId
		})
	}

	findBasePokemonOf(pokemonId){
		return this.props.basePokemons.find((basePokemon) => {
			return basePokemon.pokemon_id === pokemonId
		})
	}

	renderPokemonCards() {
		return this.props.pokemons.map((pokemon) => {
			let ability = this.findAbilityOf(pokemon.id)
			let nature = this.findNatureOf(pokemon.id)
			let basePokemon = this.findBasePokemonOf(pokemon.id)
			return <Pokemon pokemon={pokemon} ability={ability} nature={nature} basePokemon={basePokemon} />
		})
	}

	componentWillMount() {
		if(!this.loaded()) {
			this.props.getPokemons()
		}
	}

	loaded() {
		return !!this.props.pokemons[0]
	}

	render() {
		return( this.loaded() ? (
			<div>
				{this.renderPokemonCards()}
			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapStateToProps(state) {
	return {
		pokemons: state.pokemon.pokemons,
		abilities: state.pokemon.abilities,
		natures: state.pokemon.natures,
		basePokemons: state.pokemon.basePokemons
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getPokemons }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(Inventory))
