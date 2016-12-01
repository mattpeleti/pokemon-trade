class BasePokemonAbilities < ActiveRecord::Migration[5.0]
  def change
    create_table :base_pokemon_abilities do |t|
      t.integer :base_pokemon_id
      t.integer :ability_id

      t.timestamps
    end
  end
end
