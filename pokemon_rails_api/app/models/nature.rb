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
  belongs_to :offer_pokemon
  belongs_to :post_pokemon
  belongs_to :requested_pokemon
end
