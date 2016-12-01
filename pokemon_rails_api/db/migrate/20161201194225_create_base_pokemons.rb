class CreateBasePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :base_pokemons do |t|
      t.integer :natdexnum
      t.string :species
      t.string :sprite
      t.string :shiny_sprite
      t.string :form
      t.integer :hp
      t.integer :attack
      t.integer :defense
      t.integer :sp_attack
      t.integer :sp_defense
      t.integer :speed
      t.string :genders
      t.string :type1
      t.string :type2

      t.timestamps
    end
  end
end
