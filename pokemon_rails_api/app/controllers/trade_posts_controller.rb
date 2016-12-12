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
    if post
      render json: {post: post}
    else
      render json: {error: 'Post not found.'}, status: 404
    end
  end

  def create
    post = TradePost.new(
      title: post_params[:title],
      description: post_params[:description],
      pokemon_id: post_params[:pokemon_id],
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
