class ChangeRequestedPokemons < ActiveRecord::Migration[5.0]
  def change
  	remove_column :requested_pokemons, :nature_id, :integer
  	remove_column :requested_pokemons, :ability, :string
  	add_column :requested_pokemons, :base_pokemon_id, :integer
  end
end
