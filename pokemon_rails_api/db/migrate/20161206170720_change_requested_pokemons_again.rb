class ChangeRequestedPokemonsAgain < ActiveRecord::Migration[5.0]
  def change
  	remove_column :requested_pokemons, :nature, :string
  end
end
