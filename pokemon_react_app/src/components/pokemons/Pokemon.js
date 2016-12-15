import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Pokemon extends Component {

	renderSprite(){
		if(this.props.pokemon.shiny && this.props.pokemon.id) {
			return <img id="PokeSprite" height="120" src={this.props.basePokemon.shiny_sprite} alt={`${this.props.basePokemon.species} shiny_sprite`} />
		} else if (!this.props.pokemon.shiny && this.props.pokemon.id){
			return <img id="PokeSprite" height="120" src={this.props.basePokemon.sprite} alt={`${this.props.basePokemon.species} sprite`} />
		} else {
			return <img height="120" role="presentation" />
		}
	}

	renderTypes(){
		if(this.props.basePokemon.type1 && this.props.basePokemon.type2) {
			return <div>
				<img src={`/type_images/${this.props.basePokemon.type1}.gif`} alt={this.props.basePokemon.type1 + ' type_img'} />
				<img src={`/type_images/${this.props.basePokemon.type2}.gif`} alt={this.props.basePokemon.type1 + ' type_img'} />
			</div>
		} else {
			return <div>
				<img src={`/type_images/${this.props.basePokemon.type1}.gif`} alt={this.props.basePokemon.type1 + ' type_img'}/>
			</div>
		}
	}

	renderNickname(){
		if(this.props.pokemon.nickname){
			return <label>{this.props.pokemon.nickname}</label>
		}
	}

	render() {
		return(
			<div id="Poke">
				<ReactCSSTransitionGroup transitionName="Pokemon-Card" transitionEnter={true} transitionLeave={true} transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					<div key={this.props.pokemon.id} className="PokeCard">
						{this.renderSprite()}
						<p>{this.renderNickname()}, lvl {this.props.pokemon.level}</p>
						{this.renderTypes()}<br />
						<p>ability: {this.props.ability.name}</p>
						<p>nature: {this.props.nature.name}</p>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

// function mapStateToProps(state) {
// 	return {}
// }

export default auth(Pokemon)
