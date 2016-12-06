# == Schema Information
#
# Table name: trade_offers
#
#  id            :integer          not null, primary key
#  comment       :string
#  status        :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  trade_post_id :integer
#

class TradeOffer < ApplicationRecord
  belongs_to :user
  belongs_to :trade_post
end
