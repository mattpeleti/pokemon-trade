# == Schema Information
#
# Table name: abilities
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Ability < ApplicationRecord
  has_many :base_pokemon_abilities
  has_many :base_pokemons, through: :base_pokemon_abilities
end
