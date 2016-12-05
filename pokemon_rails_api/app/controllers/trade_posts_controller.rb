class TradePostsController < ApplicationController

  def index
    posts = TradePost.all
    render json: {posts: posts}
  end

  def show
    post = TradePost.find(post_params[:id])
    if post
      render json: {post: post}
    else
      render json: {error: 'Post not found.'}, status: 404
    end
  end

  def create
    post = TradePost.new(title: post_params[:title], description: post_params[:description])
    byebug
    post.user = current_user
    post.post_pokemon = PostPokemon.create(post_params[:post_pokemon])
    post.requested_pokemon = RequestedPokemon.create(post_params[:req_pokemon])
    if post.save
      render json: {message: "Post saved. Yay!"}
    else
      render json: {error: "Post creation failed."}
    end
  end

  private

  def post_params
    params.require(:post).permit(:id, :title, :description,
      post_pokemon: [:natdexnum],
      req_pokemon: [:natdexnum]
    )
  end

end
