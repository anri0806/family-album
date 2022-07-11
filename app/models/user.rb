class User < ApplicationRecord
    has_many :pictures, dependent: :destroy
    
    has_secure_password
    validates :username, presence: true
end
