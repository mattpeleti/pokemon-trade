# == Schema Information
#
# Table name: offer_pokemon_moves
#
#  id               :integer          not null, primary key
#  offer_pokemon_id :integer
#  move_id          :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class OfferPokemonMove < ApplicationRecord
  belongs_to :offer_pokemon
  belongs_to :move


end
