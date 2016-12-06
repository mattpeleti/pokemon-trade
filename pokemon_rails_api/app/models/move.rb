# == Schema Information
#
# Table name: moves
#
#  id         :integer          not null, primary key
#  name       :string
#  pp         :integer
#  category   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  move_type  :string
#

class Move < ApplicationRecord
  has_many :base_pokemon_moves
  has_many :pokemon_moves
end
