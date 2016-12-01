class CreateNatures < ActiveRecord::Migration[5.0]
  def change
    create_table :natures do |t|
      t.string :name
      t.string :inc_stat
      t.string :dec_stat

      t.timestamps
    end
  end
end
