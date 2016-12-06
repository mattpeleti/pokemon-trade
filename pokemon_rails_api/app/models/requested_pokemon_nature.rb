# == Schema Information
#
# Table name: requested_pokemon_natures
#
#  id                   :integer          not null, primary key
#  requested_pokemon_id :integer
#  nature_id            :integer
#


class RequestedPokemonNature < ApplicationRecord
  belongs_to :requested_pokemon
  belongs_to :move

end
