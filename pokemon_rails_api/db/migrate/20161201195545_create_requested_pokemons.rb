class CreateRequestedPokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :requested_pokemons do |t|
      t.integer :natdexnum
      t.string :form
      t.integer :min_level
      t.integer :max_level
      t.boolean :shiny
      t.string :gender
      t.string :ability
      t.string :nature

      t.timestamps
    end
  end
end
