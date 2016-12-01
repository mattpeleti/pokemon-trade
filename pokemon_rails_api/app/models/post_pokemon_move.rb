# == Schema Information
#
# Table name: post_pokemon_moves
#
#  id              :integer          not null, primary key
#  post_pokemon_id :integer
#  move_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class PostPokemonMove < ApplicationRecord
  belongs_to :post_pokemon
  belongs_to :move

end
