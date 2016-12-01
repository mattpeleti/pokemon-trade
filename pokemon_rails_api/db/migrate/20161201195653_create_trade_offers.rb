class CreateTradeOffers < ActiveRecord::Migration[5.0]
  def change
    create_table :trade_offers do |t|
      t.string :comment
      t.string :status

      t.timestamps
    end
  end
end
