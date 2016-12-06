class CreatePokemonNatures < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemon_natures do |t|
      t.integer :pokemon_id
      t.integer :nature_id
    end
  end
end
