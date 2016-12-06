class PokemonController < ApplicationController

  def index
    pokemons = Pokemon.all
    render json: {pokemons: pokemons}
  end

  def show
    pokemon = Pokemon.find(pokemon_params[:id])   #this is broken pls fix, the id params doesnt exist
    if pokemon
      render json: {pokemon: pokemon}
    else
      render json: {error: 'Pokemon not found.'}, status: 404
    end
  end

  def create
    pokemon = Pokemon.new(nickname: pokemon_params[:nickname], level: pokemon_params[:level])
    base_pokemon = BasePokemon.find_by(natdexnum: pokemon_params[:natdexnum])
    pokemon.user = current_user
    pokemon.base_pokemon = base_pokemon
    if pokemon.save
      render json: {message: "Pokemon saved. Yay!"}
    else
      render json: {error: "Pokemon creation failed."}
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:natdexnum, :nickname, :level)
  end


end
