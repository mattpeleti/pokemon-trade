class CreateIvs < ActiveRecord::Migration[5.0]
  def change
    create_table :ivs do |t|
      t.integer :hp
      t.integer :attack
      t.integer :defense
      t.integer :sp_attack
      t.integer :sp_defense
      t.integer :speed
      t.integer :pokemon_id
    end
  end
end
