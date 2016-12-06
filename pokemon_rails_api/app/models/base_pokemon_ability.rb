# == Schema Information
#
# Table name: base_pokemon_abilities
#
#  id              :integer          not null, primary key
#  base_pokemon_id :integer
#  ability_id      :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class BasePokemonAbility < ApplicationRecord
  belongs_to :base_pokemon
  belongs_to :ability

end
