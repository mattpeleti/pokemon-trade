class ChangeTradePosts < ActiveRecord::Migration[5.0]
  def change
    add_column :trade_posts, :pokemon_id, :integer
    remove_column :trade_posts, :user_id, :integer

  end
end
