class PictureSerializer < ActiveModel::Serializer
  attributes :id, :image, :user_id, :created_at, :updated_at, :caption

  belongs_to :user
end
