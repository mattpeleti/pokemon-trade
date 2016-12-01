# == Schema Information
#
# Table name: base_pokemons
#
#  id           :integer          not null, primary key
#  natdexnum    :integer
#  species      :string
#  sprite       :string
#  shiny_sprite :string
#  form         :string
#  hp           :integer
#  attack       :integer
#  defense      :integer
#  sp_attack    :integer
#  sp_defense   :integer
#  speed        :integer
#  genders      :string
#  type1        :string
#  type2        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class BasePokemon < ApplicationRecord
  has_many :base_pokemon_moves
  has_many :moves, through: :base_pokemon_moves
  has_many :base_pokemon_abilities
  has_many :abilities, through: :base_pokemon_abilities
end
