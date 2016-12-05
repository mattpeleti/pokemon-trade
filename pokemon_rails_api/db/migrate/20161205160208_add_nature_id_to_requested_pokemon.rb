class AddNatureIdToRequestedPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :requested_pokemons, :nature_id, :integer
  end
end
