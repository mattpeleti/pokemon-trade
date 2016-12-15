class TradePostsController < ApplicationController

  #requested_pokemons << RequestedPokemon.find_by(trade_post_id: 17)


  def index
    posts = current_user.trade_posts #RequestedPokemon[0].trade_post => the trade post that the req poke belongs to , posts.pokemon => the posted poke
    requested_pokemons = []
    post_pokemons = []
    posts.map do |post|
      post_pokemons << post.pokemon
      requested_pokemons << RequestedPokemon.find_by(trade_post_id: post.id)
    end
    render json: {user_posts: posts, requested_pokemons: requested_pokemons, post_pokemons: post_pokemons}
  end

  def show
    post = TradePost.find(params[:id])
    post_pokemon = post.pokemon.attributes
    post_pokemon[:ability] = post.pokemon.ability
    post_pokemon[:nature] = post.pokemon.nature
    post_pokemon[:base_pokemon] = post.pokemon.base_pokemon
    user = post.pokemon.user
    requested_pokemon_ARO = RequestedPokemon.find_by(trade_post_id: post.id)
    requested_pokemon = requested_pokemon_ARO.attributes
    requested_pokemon[:abilities] = requested_pokemon_ARO.abilities
    requested_pokemon[:natures] = requested_pokemon_ARO.natures
    requested_pokemon[:base_pokemon] = requested_pokemon_ARO.base_pokemon
    if post
      render json: {
        post: post,
        postPokemon: post_pokemon,
        requestedPokemon: requested_pokemon,
        user: {id: user.id, username: user.username, reputation: user.reputation}
      }
    else
      render json: {error: 'Post not found.'}, status: 404
    end
  end

  def create
    post = TradePost.new(
      title: post_params[:title],
      description: post_params[:description],
      pokemon_id: post_params[:pokemon_id]
    )
    if post.save
      render json: {postId: post.id}
    else
      render json: {error: "Post creation failed."}
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :pokemon_id)
  end


end
