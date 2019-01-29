# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: Post

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: User

  has_one :receiver,
    through: :post,
    source: :user


end