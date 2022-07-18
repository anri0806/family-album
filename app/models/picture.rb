class Picture < ApplicationRecord

    belongs_to :user, foreign_key: :user_id, class_name: "User"

    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    validates :image, presence: true
    validates :caption, length: {maximum: 100}, presence: true


end

