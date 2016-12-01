class CreateTradePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :trade_posts do |t|
      t.string :title
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
