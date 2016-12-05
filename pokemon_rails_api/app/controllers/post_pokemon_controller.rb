class PostPokemonController < ApplicationController

  def index
    post_pokemons = PostPokemon.all
    render json: {post_pokemons: post_pokemons}
  end

  def show
    post_pokemon = PostPokemon.find(post_pokemon_params[:id])   #this is broken pls fix, the id params doesnt exist
    if post_pokemon
      render json: {post_pokemon: post_pokemon}
    else
      render json: {error: 'Post Pokemon not found.'}, status: 404
    end
  end

  def create
    post_pokemon = PostPokemon.new(post_pokemon_params)
    byebug
    if post_pokemon.save
      render json: {message: "Post Pokemon saved. Yay!"}
    else
      render json: {error: "Post Pokemon creation failed."}
    end
  end

  private

  def post_pokemon_params
    params.require(:post_pokemon).permit(:natdexnum, :nickname, :level, :trade_post_id)
  end


end
