class AddNatureIdToPostPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :post_pokemons, :nature_id, :integer
  end
end
