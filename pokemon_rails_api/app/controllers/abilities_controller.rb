class AbilitiesController < ApplicationController
	skip_before_action :authenticate_user

  def show
  	base_pokemon = BasePokemon.find(params[:id])
  	if base_pokemon
	    abilities = base_pokemon.abilities
	    render json: {abilities: abilities}
	  else
	  	render json: {error: 'Pokemon not found'}, status: 404
	  end
  end

end