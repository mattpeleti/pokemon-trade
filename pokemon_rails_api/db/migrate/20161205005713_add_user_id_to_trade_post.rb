class AddUserIdToTradePost < ActiveRecord::Migration[5.0]
  def change
    add_column :trade_posts, :user_id, :integer
  end
end
