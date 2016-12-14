import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createPost from '../../actions/posts/createPost'
import getPokemons from '../../actions/pokemons/getPokemons'
import Pokemon from '../pokemons/Pokemon'
import NewRequestedPokemon from './NewRequestedPokemon'
import auth from '../../lib/auth'
import getPost from '../../actions/posts/getPost'

class NewPost extends Component {
	constructor(props){
		super(props)
		this.state = {...this.props.requestedPokemonValues, title: "", description: "", pokemonId: null}
	}

	componentWillMount() {
		if(!this.loaded()) {
			this.props.getPokemons()
		} else {
			this.setState({pokemonId: this.props.pokemons[0].id})
		}
	}

	loaded() {
		return !!this.props.pokemons[0]
	}

	handleTitleChange(event) {
		this.setState({title: event.target.value})
	}

	handleDescriptionChange(event) {
		this.setState({description: event.target.value})
	}

	handlePokemonChange(event) {
		this.setState({pokemonId: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createPost(this.state, this.props.requestedPokemonValues)

	}

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

	listPokemons() {
		return this.props.pokemons.map((pokemon) => {
			return <option key={pokemon.id} value={pokemon.id}>{pokemon.nickname}, lvl {pokemon.level} {this.findBasePokemonOf(pokemon.id).species}</option>
		})
	}

	renderPokemonCard() {
		let pokemon = this.props.pokemons.find((pokemon) => pokemon.id == this.state.pokemonId)
		if(pokemon) {
			let ability = this.findAbilityOf(pokemon.id)
			let nature = this.findNatureOf(pokemon.id)
			let basePokemon = this.findBasePokemonOf(pokemon.id)
			return <Pokemon pokemon={pokemon} ability={ability} nature={nature} basePokemon={basePokemon}/>
		} else {
			return <img height="245" role="presentation" /> // MATT fix pls
		}
	}

	// renderPokemonForm(){
	// 	if(this.state.renderPostPokeform){
	// 		return <NewPostPokemon />
	// 	}
	// }

	render() {
		return ( this.loaded() ? (
			<div className="NewPostContainer" >
				<form className={'NewPostForm'} onSubmit={this.handleSubmit.bind(this)}>

				<div className="twelve columns">
				<label>Post Title: </label>
				<input type="text" placeholder="Title" onChange={this.handleTitleChange.bind(this)}/>
				<br />
				</div>

				<div className="six columns">
					<br /><br />
					<label>Select a pokemon to offer: </label>
					<select onChange={this.handlePokemonChange.bind(this)}>
					<option key={666} value={null}>- select a pokemon -</option>

					{this.listPokemons()}
					</select>
					<br />
					{this.renderPokemonCard()}
					<br />
					<label>Post Description: </label>
					<textarea placeholder="Description" onChange={this.handleDescriptionChange.bind(this)}/>
				</div>

				<div className="five columns">
				<NewRequestedPokemon />
				<br />
				<input className="SubmitStyle" type="submit"/>
				</div>

				</form>
			</div>
		) : <h3>Loading...</h3>)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createPost, getPokemons, getPost }, dispatch)
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.currentUser,
		id: state.posts.new_post_id,
		pokemons: state.pokemon.pokemons,
		basePokemons: state.pokemon.basePokemons,
		abilities: state.pokemon.abilities,
		natures: state.pokemon.natures,
		requestedPokemonValues: state.forms.requestedPokemonValues
	}
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(NewPost))
