# == Schema Information
#
# Table name: trade_posts
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  status      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  pokemon_id  :integer
#

class TradePost < ApplicationRecord
  has_many :trade_offers
  belongs_to :pokemon

  after_initialize :set_defaults, unless: :persisted?

  def set_defaults
    self.status ||= 'OPEN'
  end
end
