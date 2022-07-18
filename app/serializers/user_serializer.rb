class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :relationship, :created_at
end
