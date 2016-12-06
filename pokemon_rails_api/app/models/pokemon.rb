# == Schema Information
#
# Table name: pokemons
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  base_pokemon_id :integer
#  nickname        :string
#  level           :integer
#  gender          :string
#  shiny           :boolean
#  held_item       :string
#  pokeball        :string
#

#  id            :integer          not null, primary key
#  nickname      :string
#  level         :integer
#  shiny         :boolean
#  gender        :string
#  held_item     :string
#  pokeball      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  base_pokemon_id

class Pokemon < ApplicationRecord
  belongs_to :user
  belongs_to :base_pokemon
  has_one :pokemon_nature
  has_one :nature, through: :pokemon_nature
  has_one :pokemon_ability
  has_one :iv
  has_one :stat
  has_many :trade_posts
  has_many :trade_offers
	has_many :pokemon_moves
  has_many :moves, through: :pokemon_moves
end
