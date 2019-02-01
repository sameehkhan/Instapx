# == Schema Information
#
# Table name: posts
#
#  id                   :bigint(8)        not null, primary key
#  user_id              :integer          not null
#  post_author_username :integer
#  caption              :text
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Post < ApplicationRecord
  validates :user_id, presence: true

    belongs_to :user,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: 'User'
    
    has_many :comments

    has_many :likes

    has_one_attached :photo

end
