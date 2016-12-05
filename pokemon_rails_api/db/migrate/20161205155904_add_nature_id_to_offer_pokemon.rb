class AddNatureIdToOfferPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :offer_pokemons, :nature_id, :integer
  end
end
