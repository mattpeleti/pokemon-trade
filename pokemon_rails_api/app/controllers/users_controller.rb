class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  def show
    user = current_user
    render json: {userId: user.id, username: user.username, email: user.email, friendcode: user.friendcode}
  end

  def create
    user = User.new(auth_params)
    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, userId: user.id, username: user.username}
    else
      render json: {error: "Account creation failed."}
    end
  end

  def edit
    user = current_user
    if user.update(edit_params)
      render json: {username: user.username, email: user.email, friendcode: user.friendcode}
    else
      render json: {message: "Account edit failed"}
    end
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :username, :friendcode, :password)
  end

  def edit_params
    params.require(:user).permit(:email, :friendcode, :password)
  end

  # def user_params
  #   params.require(:user).permit(:email, :friendcode, :username)
  # end

end
