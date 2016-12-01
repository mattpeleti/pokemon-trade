class CreateOfferPokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :offer_pokemons do |t|
      t.integer :natdexnum
      t.string :nickname
      t.string :form
      t.integer :level
      t.string :ability
      t.boolean :shiny
      t.string :gender
      t.string :held_item
      t.string :pokeball
      t.string :move1
      t.string :move2
      t.string :move3
      t.string :move4
      t.string :nature
      t.integer :hp
      t.integer :attack
      t.integer :defense
      t.integer :sp_attack
      t.integer :sp_defense
      t.integer :speed
      t.integer :iv_hp
      t.integer :iv_attack
      t.integer :iv_defense
      t.integer :iv_sp_attack
      t.integer :iv_sp_defense
      t.integer :iv_speed

      t.timestamps
    end
  end
end
