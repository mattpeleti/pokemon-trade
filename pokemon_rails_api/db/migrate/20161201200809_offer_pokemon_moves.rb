class OfferPokemonMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :offer_pokemon_moves do |t|
      t.integer :offer_pokemon_id
      t.integer :move_id

      t.timestamps
    end
  end
end
