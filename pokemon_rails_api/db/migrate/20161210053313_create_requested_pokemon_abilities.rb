class CreateRequestedPokemonAbilities < ActiveRecord::Migration[5.0]
  def change
    create_table :requested_pokemon_abilities do |t|
      t.integer :requested_pokemon_id
      t.integer :ability_id
    end
  end
end
