import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'

class BasePokemon extends Component {

	renderSprite(){
		if(this.props.showShiny) {
			return <img src={this.props.shiny_sprite} />
		} else {
			return <img src={this.props.sprite} />
		}
	}

	render() {
		return(
			<div className="basePokemon">
				{this.renderSprite()}<br />
				<p>{this.props.species}</p>
				<p>#{this.props.natdexnum}</p>
				<p>{this.props.type1} / {this.props.type2}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {...state.basePokemon.base_pokemon, showShiny: state.posts.showShiny}
}

export default auth(connect(mapStateToProps)(BasePokemon))