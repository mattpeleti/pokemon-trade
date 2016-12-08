// import React, { Component } from 'react'
// import { browserHistory } from 'react-router'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import getBasePokemon from '../../actions/pokemons/getBasePokemon'
// import getAbilities from '../../actions/pokemons/getAbilities'
// import createPokemon from '../../actions/pokemons/createPokemon'
// import auth from '../../lib/auth'
// import BasePokemon from './BasePokemon'

// class NewPokemon extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {natdexnum: null, nickname: "", level: null, trade_post_id: props.trade_post_id, nature: 1, ability: 1}
// 	}

// 	handleAbilityChange(event) {
// 		this.setState({ability: event.target.value})
// 	}

// 	listAbilities() {
// 		debugger
// 		return this.props.abilities.map((ability) => {
// 			return <option value={ability.id}>{ability.name}</option>
// 		})
// 	}

// 	render() {

// 		return(
// 			<div className="newPokemon">
// 				<h3>Create a Pokemon</h3>
// 				<BasePokemon />
// 				<form onSubmit={this.handleSubmit.bind(this)}>
// 					<label>Pokedex Number(1-12): </label>
// 					<input type="integer" placeholder="#" onChange={this.handleNatDexNumChange.bind(this)}/>
// 					<br />
// 					<label>Nickname: </label>
// 					<input type="text" placeholder="Nickname" onChange={this.handleNicknameChange.bind(this)}/>
// 					<br />
// 					<label>Level: </label>
// 					<input type="intger" placeholder="Level" onChange={this.handleLevelChange.bind(this)}/>
// 					<br />
// 					<label>Select a Nature: </label>
// 					<select onChange={this.handleNatureChange.bind(this)}>
// 						{this.listNatures()}
// 					</select>
// 					<br />
// 					<label>Select an Ability: </label>
// 					<select onChange={this.handleAbilityChange.bind(this)}>
// 						{this.listAbilities()}
// 					</select>
// 					<br />
// 					<input type="submit" />
// 				</form>
// 			</div>
// 		)
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ createPokemon, getBasePokemon, getAbilities }, dispatch)
// }

// function mapStateToProps(state) {
// 	return {
// 		trade_post_id: state.posts.new_post_id,
// 		abilities: state.basePokemon.abilities,
// 		base_pokemon: state.basePokemon.base_pokemon
// 	}
// }

// export default auth(connect(mapStateToProps, mapDispatchToProps)(NewPokemon))
