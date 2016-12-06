class ChangeMoves < ActiveRecord::Migration[5.0]
  def change
  	remove_column :moves, :type, :string
    add_column :moves, :move_type, :string

  end
end
