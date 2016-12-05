class RemoveMovesFromPostPokemons < ActiveRecord::Migration[5.0]
  def change
    remove_column :post_pokemons, :move1, :string
    remove_column :post_pokemons, :move2, :string
    remove_column :post_pokemons, :move3, :string
    remove_column :post_pokemons, :move4, :string
  end
end
