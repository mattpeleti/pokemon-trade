class AddUserIdToTradeOffer < ActiveRecord::Migration[5.0]
  def change
    add_column :trade_offers, :user_id, :integer
  end
end
