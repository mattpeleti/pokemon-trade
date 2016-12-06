class ChangeBasePokemons < ActiveRecord::Migration[5.0]
  def change
  	remove_column :base_pokemons, :hp, :integer
  	remove_column :base_pokemons, :attack, :integer
  	remove_column :base_pokemons, :defense, :integer
  	remove_column :base_pokemons, :sp_attack, :integer
  	remove_column :base_pokemons, :sp_defense, :integer
  	remove_column :base_pokemons, :speed, :integer
  end
end
