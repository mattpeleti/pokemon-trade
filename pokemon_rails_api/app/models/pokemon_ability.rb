# == Schema Information
#
# Table name: pokemon_abilities
#
#  id         :integer          not null, primary key
#  pokemon_id :integer
#  ability_id :integer
#

class PokemonAbility < ApplicationRecord
  belongs_to :pokemon
  belongs_to :ability

end
