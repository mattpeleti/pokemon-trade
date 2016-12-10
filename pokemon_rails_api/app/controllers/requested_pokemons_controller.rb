class RequestedPokemonsController < ApplicationController

  def show
    requested_pokemon = RequestedPokemon.find(params[:id])
    if pokemon
      render json: {requestedPokemon: requested_pokemon}
    else
      render json: {error: 'Requested Pokemon not found.'}, status: 404
    end
  end

  def create
    requested_pokemon = RequestedPokemon.new(
      base_pokemon_id: req_pokemon_params[:base_pokemon_id],
      min_level: req_pokemon_params[:min_level],
      max_level: req_pokemon_params[:max_level],
      shiny: req_pokemon_params[:shiny],
      trade_post_id: params[:id],
      nature_ids: req_pokemon_params[:nature_ids],
      ability_ids: req_pokemon_params[:ability_ids]
    )
    # requested_pokemon.nature_ids
    if requested_pokemon.save
      render json: {message: "Requested Pokemon saved. Yay!"}
    else
      render json: {error: "Pokemon creation failed."}
    end
  end

  private

  def req_pokemon_params
    params.require(:requested_pokemon).permit(
      :base_pokemon_id,
      :min_level,
      :max_level,
      :shiny,
      nature_ids: [],
      ability_ids: []
    )
  end


end
