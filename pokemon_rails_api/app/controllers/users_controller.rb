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
      render json: {jwt: jwt, userId: user.id, username: user.username}, status: 200
    else
      render json: {error: "Account creation failed."}
    end
  end

  # def edit
  #   current_user.update(user_params)
  # end

  private

  def auth_params
    params.require(:auth).permit(:email, :username, :friendcode, :password)
  end

  # def user_params
  #   params.require(:user).permit(:email, :friendcode, :username)
  # end

end
