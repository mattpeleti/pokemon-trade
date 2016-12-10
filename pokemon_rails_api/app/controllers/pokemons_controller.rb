class PokemonsController < ApplicationController

  def index
    pokemons = current_user.pokemons
    abilities = pokemons.map do |pokemon|
      ab_attrs = pokemon.ability.attributes.select do |k,v|
        %w{id name description}.include?(k)
      end
      ab_attrs.merge({pokemon_id: pokemon.id})
    end
    natures = pokemons.map do |pokemon|
      nature_attrs = pokemon.nature.attributes.select do |k,v|
        %w{id name}.include?(k)
      end
      nature_attrs.merge({pokemon_id: pokemon.id})
    end
    base_pokemons = pokemons.map do |pokemon|
      pokemon.base_pokemon.attributes.merge({pokemon_id: pokemon.id})
    end
    render json: {pokemons: pokemons, abilities: abilities, natures: natures, basePokemons: base_pokemons}
  end

  def show
    pokemon = Pokemon.find(params[:id])   #this is broken pls fix, the id params doesnt exist
    if pokemon
      render json: {pokemon: pokemon}
    else
      render json: {error: 'Pokemon not found.'}, status: 404
    end
  end

  def create
    pokemon = Pokemon.new(
      nickname: pokemon_params[:nickname],
      level: pokemon_params[:level],
      shiny: pokemon_params[:shiny]
      )
    pokemon.user = current_user
    base_pokemon = BasePokemon.find_by(natdexnum: pokemon_params[:natdexnum])
    pokemon.base_pokemon = base_pokemon
    pokemon.nature = Nature.find(pokemon_params[:nature_id])
    pokemon.ability = Ability.find(pokemon_params[:ability_id])
    if pokemon.save
      render json: {message: "Pokemon saved. Yay!"}
    else
      render json: {error: "Pokemon creation failed."}
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:natdexnum, :nickname, :level, :nature_id, :ability_id, :shiny)
  end


end
