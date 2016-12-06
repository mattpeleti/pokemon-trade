class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.integer :user_id
      t.integer :base_pokemon_id
      t.string :nickname
      t.integer :level
      t.string :gender
      t.boolean :shiny
      t.string :held_item
      t.string :pokeball
    end
  end
end
