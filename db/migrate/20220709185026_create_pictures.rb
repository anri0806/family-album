class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.string :image
      t.date :date
      t.integer :user_id

      t.timestamps
    end
  end
end
