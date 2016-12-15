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
  has_many :pokemon
  has_many :requested_pokemon

  after_initialize :set_defaults, unless: :persisted?

  def set_defaults
    self.form ||= 'standard'
  end
end
