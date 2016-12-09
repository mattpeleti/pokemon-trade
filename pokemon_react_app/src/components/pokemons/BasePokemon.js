import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




class BasePokemon extends Component {

	renderSprite(){
		if(this.props.showShiny) {
			return <img height="120" src={this.props.shiny_sprite}/>
		} else {
			return <img height="120" src={this.props.sprite}/>
		}
	}

	renderTypes(){
		if(this.props.type1 && this.props.type2){
			return <div>
						 		<img src={`/type_images/${this.props.type1}.gif`}/>
				     		<img src={`/type_images/${this.props.type2}.gif`}/>
						 </div>
		}if(this.props.type1){
			return <div>
						 		<img src={`/type_images/${this.props.type1}.gif`}/>
						 </div>
		}else{
			return <div>
						 		<img height="50"/>
						 </div>
		}
	}

	renderPokemonName(){
		if(this.props.natdexnum){
			return <p>#{this.props.natdexnum} {this.props.species}</p>
		}
	}

	render() {
		return(
				<div className="BasePoke">
					<ReactCSSTransitionGroup transitionName="Base-Pokemon-Card" transitionEnter={true} transitionLeave={true} transitionAppear={false} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
						<div key={this.props.id} className="BasePokeCard">
							{this.renderSprite()}
							<br />
							{this.renderPokemonName()}
							{this.renderTypes()}<br />
						</div>

					</ReactCSSTransitionGroup>
				</div>
		)
	}
}

function mapStateToProps(state) {
	return {...state.basePokemon.base_pokemon, showShiny: state.posts.showShiny}
}

export default auth(connect(mapStateToProps)(BasePokemon))
