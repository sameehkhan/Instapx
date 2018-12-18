# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  caption    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

    belongs_to :user, 
    foreign_key: :user_id,
    class_name: :User

    has_one_attached :photo

end
