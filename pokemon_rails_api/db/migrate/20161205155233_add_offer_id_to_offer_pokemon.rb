class AddOfferIdToOfferPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :offer_pokemons, :offer_id, :integer
  end
end
