class AddCaptionInPictures < ActiveRecord::Migration[6.1]
  def change
    add_column :pictures, :caption, :string
  end
end
