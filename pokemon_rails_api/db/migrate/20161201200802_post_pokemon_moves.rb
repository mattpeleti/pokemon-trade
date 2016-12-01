class PostPokemonMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :post_pokemon_moves do |t|
      t.integer :post_pokemon_id
      t.integer :move_id

      t.timestamps
    end
  end
end
