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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
