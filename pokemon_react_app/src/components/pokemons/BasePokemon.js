import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'


class BasePokemon extends Component {

	renderSprite(){
		if(this.props.showShiny) {
			return <img src={this.props.shiny_sprite}/>
		} else {
			return <img src={this.props.sprite}/>
		}
	}

	renderTypes(){
		if(this.props.type1 && this.props.type2){
			return <div>
						 		<img src={require(`../../../public/type_images/${this.props.type1}.gif`)}/>
				     		<img src={require(`../../../public/type_images/${this.props.type2}.gif`)}/>
						 </div>
		}if(this.props.type1){
			return <div>
						 		<img src={require(`../../../public/type_images/${this.props.type1}.gif`)}/>
						 </div>
		}else{
			return <br />
		}
	}

	renderPokemonName(){
		if(this.props.natdexnum){
			return <p>#{this.props.natdexnum} {this.props.species}</p>
		}
	}

	render() {
		return(
				<div>
					{this.renderSprite()}
					<br />
					{this.renderPokemonName()}
					{/* <p>#{this.props.natdexnum} {this.props.species}</p> */}
					{/* <p>#{this.props.natdexnum}</p> */}
					{this.renderTypes()}<br />
					{/* <p>{this.props.type1} / {this.props.type2}</p> */}
				</div>
		)
	}
}

function mapStateToProps(state) {
	return {...state.basePokemon.base_pokemon, showShiny: state.posts.showShiny}
}

export default auth(connect(mapStateToProps)(BasePokemon))
