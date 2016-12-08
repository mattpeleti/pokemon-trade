class SessionsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    user = User.find_by(username: user_params[:username])
    if user && user.authenticate(user_params[:password])
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, userId: user.id, username: user.username, email: user.email, friendcode: user.friendcode}, status: 200
    else
      render json: {error: "Invalid Credentials"}, status: 401
    end
  end

  private

  def user_params
    params.require(:auth).permit(:username, :password)
  end
end
