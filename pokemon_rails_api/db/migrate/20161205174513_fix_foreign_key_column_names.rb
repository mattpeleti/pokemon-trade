class FixForeignKeyColumnNames < ActiveRecord::Migration[5.0]
  def change
		rename_column :post_pokemons, :post_id, :trade_post_id
		rename_column :requested_pokemons, :post_id, :trade_post_id
		rename_column :offer_pokemons, :offer_id, :trade_offer_id
  end
end
