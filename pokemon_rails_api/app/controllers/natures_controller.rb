class NaturesController < ApplicationController
	skip_before_action :authenticate_user

  def index
    natures = Nature.all
    render json: {natures: natures}
  end

end