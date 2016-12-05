# == Schema Information
#
# Table name: requested_pokemons
#
#  id            :integer          not null, primary key
#  natdexnum     :integer
#  form          :string
#  min_level     :integer
#  max_level     :integer
#  shiny         :boolean
#  gender        :string
#  ability       :string
#  nature        :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  trade_post_id :integer
#  nature_id     :integer
#

class RequestedPokemon < ApplicationRecord
  belongs_to :trade_post
  belongs_to :nature
end
