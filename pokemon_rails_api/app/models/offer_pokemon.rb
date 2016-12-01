# == Schema Information
#
# Table name: offer_pokemons
#
#  id            :integer          not null, primary key
#  natdexnum     :integer
#  nickname      :string
#  form          :string
#  level         :integer
#  ability       :string
#  shiny         :boolean
#  gender        :string
#  held_item     :string
#  pokeball      :string
#  move1         :string
#  move2         :string
#  move3         :string
#  move4         :string
#  nature        :string
#  hp            :integer
#  attack        :integer
#  defense       :integer
#  sp_attack     :integer
#  sp_defense    :integer
#  speed         :integer
#  iv_hp         :integer
#  iv_attack     :integer
#  iv_defense    :integer
#  iv_sp_attack  :integer
#  iv_sp_defense :integer
#  iv_speed      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class OfferPokemon < ApplicationRecord
  belongs_to :trade_offer
  has_many :offer_pokemon_moves
  has_many :moves, through: :offer_pokemon_moves
end
