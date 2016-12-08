class BasePokemonsController < ApplicationController

  def index
    base_pokemons = BasePokemon.all
    render json: {base_pokemons: base_pokemons}
  end

  def show
    base_pokemon = BasePokemon.find_by(natdexnum: params[:natdexnum])
    if base_pokemon
      render json: {basePokemon: base_pokemon}
    else
      render json: {error: 'Base Pokemon not found.'}, status: 404
    end
  end

  private

  def base_pokemon_params
    params.require(:base_pokemon).permit(:natdexnum, :form)
  end


end
