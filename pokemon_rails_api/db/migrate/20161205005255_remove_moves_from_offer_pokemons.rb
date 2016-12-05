class RemoveMovesFromOfferPokemons < ActiveRecord::Migration[5.0]
  def change
    remove_column :offer_pokemons, :move1, :string
    remove_column :offer_pokemons, :move2, :string
    remove_column :offer_pokemons, :move3, :string
    remove_column :offer_pokemons, :move4, :string
  end
end
