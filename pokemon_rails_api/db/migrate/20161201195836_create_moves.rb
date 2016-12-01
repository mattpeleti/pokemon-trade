class CreateMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :moves do |t|
      t.string :name
      t.integer :pp
      t.string :type
      t.string :category

      t.timestamps
    end
  end
end
