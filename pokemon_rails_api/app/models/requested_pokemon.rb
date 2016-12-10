# == Schema Information
#
# Table name: requested_pokemons
#
#  id              :integer          not null, primary key
#  natdexnum       :integer
#  form            :string
#  min_level       :integer
#  max_level       :integer
#  shiny           :boolean
#  gender          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  trade_post_id   :integer
#  base_pokemon_id :integer
#

class RequestedPokemon < ApplicationRecord
	belongs_to :base_pokemon
  belongs_to :trade_post
  has_many :requested_pokemon_natures
  has_many :natures, through: :requested_pokemon_natures
  has_many :requested_pokemon_abilities
  has_many :abilities, through: :requested_pokemon_abilities
end
