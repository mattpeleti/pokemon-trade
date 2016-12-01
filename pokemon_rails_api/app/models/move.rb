# == Schema Information
#
# Table name: moves
#
#  id         :integer          not null, primary key
#  name       :string
#  pp         :integer
#  type       :string
#  category   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Move < ApplicationRecord
  has_many :post_pokemon_moves, :offer_pokemon_moves, :base_pokemon_moves
end
