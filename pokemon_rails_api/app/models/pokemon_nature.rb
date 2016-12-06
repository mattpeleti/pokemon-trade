# == Schema Information
#
# Table name: pokemon_natures
#
#  id         :integer          not null, primary key
#  pokemon_id :integer
#  nature_id  :integer
#

class PokemonNature < ApplicationRecord
  belongs_to :pokemon
  belongs_to :nature

end
