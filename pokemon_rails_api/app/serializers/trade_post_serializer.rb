class TradePostSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :status

  has_many :trade_offers
  has_one :requested_pokemon
  belongs_to :pokemon

end