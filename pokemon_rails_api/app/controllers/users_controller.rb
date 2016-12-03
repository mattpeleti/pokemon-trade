class UsersController < ApplicationController
  skip_before_action :authenticate_user


  def create
    user = User.new(user_params)
    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, userId: user.id}, status: 200
    else
      render json: {error: "Account creation failed."}
    end
  end

  private

  def user_params
    params.require(:auth).permit(:email, :username, :friendcode, :password)
  end

end
