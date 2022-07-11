class RemoveDateFromPictures < ActiveRecord::Migration[6.1]
  def change
    remove_column :pictures, :date
  end
end
