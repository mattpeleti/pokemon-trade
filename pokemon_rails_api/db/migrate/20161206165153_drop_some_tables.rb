class DropSomeTables < ActiveRecord::Migration[5.0]
  def change
  	drop_table :offer_pokemons
  	drop_table :offer_pokemon_moves
  	drop_table :post_pokemons
  	drop_table :post_pokemon_moves
  end
end
