class Songs < ApplicationRecord
    validates :artist_name, presence: true
end