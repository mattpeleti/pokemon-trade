# == Schema Information
#
# Table name: base_pokemon_moves
#
#  id              :integer          not null, primary key
#  base_pokemon_id :integer
#  move_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class BasePokemonMove < ApplicationRecord
  belongs_to :base_pokemon
  belongs_to :move



end
