class CreateRequestedPokemonNatures < ActiveRecord::Migration[5.0]
  def change
    create_table :requested_pokemon_natures do |t|
      t.integer :requested_pokemon_id
      t.integer :nature_id
    end
  end
end
