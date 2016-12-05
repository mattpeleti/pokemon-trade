class AddPostIdToRequestedPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :requested_pokemons, :post_id, :integer
  end
end
