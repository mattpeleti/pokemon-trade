# == Schema Information
#
# Table name: natures
#
#  id         :integer          not null, primary key
#  name       :string
#  inc_stat   :string
#  dec_stat   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Nature < ApplicationRecord
  has_many :offer_pokemons
  has_many :post_pokemons
  has_many :requested_pokemons
end
