class UsersController < ApplicationController
  skip_before_action :authenticate_user


  def create
    user = User.new(user_params[:user])

    if user.save
      jwt = Auth.issue(user.id)
      render json: {jwt: jwt}
    else
      render json: {error: "Account creation failed."}
    end
  end




private

  def user_params
    params.require(:user).permit(:email, :username, :friendcode, :password_digest)
  end

end
