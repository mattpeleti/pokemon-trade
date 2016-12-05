class AddPostIdToPostPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :post_pokemons, :post_id, :integer
  end
end
