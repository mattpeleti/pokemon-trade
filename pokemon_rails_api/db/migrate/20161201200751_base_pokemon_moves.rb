class BasePokemonMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :base_pokemon_moves do |t|
      t.integer :base_pokemon_id
      t.integer :move_id

      t.timestamps
    end
  end
end
