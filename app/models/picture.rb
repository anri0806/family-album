class Picture < ApplicationRecord

    belongs_to :user, foreign_key: :user_id, class_name: "User"

    has_many :comments
    has_many :users, through: :comments
end

