class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :ide
      t.string :nome
      t.string :cognome
      t.integer :eta
      t.integer :figlio1
      t.integer :figlio2
      t.timestamps null: false
    end
  end
end
