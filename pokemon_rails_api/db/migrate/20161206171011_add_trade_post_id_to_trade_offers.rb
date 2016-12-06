class AddTradePostIdToTradeOffers < ActiveRecord::Migration[5.0]
  def change
    add_column :trade_offers, :trade_post_id, :integer
  end
end
