class TradePostsController < ApplicationController

  def index
    posts = TradePost.all
    render json: {posts: posts}
  end

  def show
    post = TradePost.find(post_id_params)
    if post
      render json: {post: post}
    else
      render json: {error: 'Post not found.'}, status: 404
    end
  end

  def create # ACTUALLY UPDATING EMPTY POST
    post = TradePost.find_by(post_id_params)
    post.update(post_params)
    if post.save
      render json: {message: "Post saved. Yay!"}
    else
      render json: {error: "Post creation failed."}
    end
  end

  def set_id
    post = TradePost.new
    post.user = current_user
    if post.save
      render json: {id: post.id}
    else
      render json: {error: "Post Initialization failed."}
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :post_pokemon_id, :requested_pokemon_id)
  end

  def post_id_params
    params.require(:post).permit(:id)
  end

end
