import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class RequestedPokemon extends Component {

	renderSprite(){
		if(this.props.reqPokemon.shiny && this.props.reqPokemon.id) {
			return <img height="120" src={this.props.basePokemon.shiny_sprite} alt={`${this.props.basePokemon.species} shiny_sprite`} />
		} else if (!this.props.reqPokemon.shiny && this.props.reqPokemon.id){
			return <img height="120" src={this.props.basePokemon.sprite} alt={`${this.props.basePokemon.species} sprite`} />
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
		if(this.props.reqPokemon.nickname){
			return <label>{this.props.reqPokemon.nickname}</label>
		}
	}

	render() {
		return(
			<div className="Poke">
				<ReactCSSTransitionGroup transitionName="Pokemon-Card" transitionEnter={true} transitionLeave={true} transitionAppear={false} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					<div key={this.props.reqPokemon.id} className="PokeCard">
						{this.renderSprite()}
						<p>lvl {this.props.reqPokemon.min_level} - {this.props.reqPokemon.max_level} {this.props.basePokemon.species}</p>
						{this.renderTypes()}<br />
						<p>ability: {this.props.abilities[0].name}</p>
						<p>nature: {this.props.natures[0].name}</p>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default auth(RequestedPokemon)
