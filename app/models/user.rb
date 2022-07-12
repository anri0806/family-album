class User < ApplicationRecord

    has_many :commented_pictures, foreign_key: "user_id", class_name: "Picture", dependent: :destroy

    has_many :comments
    has_many :pictures, through: :comments
    
    has_secure_password
    validates :username, presence: true
end
