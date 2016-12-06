# == Schema Information
#
# Table name: pokemon_moves
#
#  id         :integer          not null, primary key
#  pokemon_id :integer
#  move_id    :integer
#

class PokemonMove < ApplicationRecord
  belongs_to :pokemon
  belongs_to :move

end
