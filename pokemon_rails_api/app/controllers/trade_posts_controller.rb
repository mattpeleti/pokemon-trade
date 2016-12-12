class TradePostsController < ApplicationController

  def index
    posts = TradePost.all
    render json: {posts: posts}
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
