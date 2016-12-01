# == Schema Information
#
# Table name: requested_pokemons
#
#  id         :integer          not null, primary key
#  natdexnum  :integer
#  form       :string
#  min_level  :integer
#  max_level  :integer
#  shiny      :boolean
#  gender     :string
#  ability    :string
#  nature     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RequestedPokemon < ApplicationRecord
  belongs_to :trade_post
end
