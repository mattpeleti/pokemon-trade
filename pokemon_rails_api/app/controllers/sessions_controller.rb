class SessionsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    jwt = Auth.issue(user_params[:user][:id])
    render json: {jwt: jwt}
  end

  def destroy
    #localstorage haha
  end

  private

  def user_params
    params.require(:user).permit(:id)
  end
end
