# == Schema Information
#
# Table name: requested_pokemon_abilities
#
#  id                   :integer          not null, primary key
#  requested_pokemon_id :integer
#  ability_id           :integer
#


class RequestedPokemonAbility < ApplicationRecord
  belongs_to :requested_pokemon
  belongs_to :ability

end
