# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  bio             :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :full_name, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_one_attached :photo

  has_many :posts

  has_many :likes

   has_many :followeeships,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Follow',
    dependent: :destroy

  has_many :followerships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Follow',
    dependent: :destroy

  has_many :followings,
    through: :followeeships,
    source: :following

  has_many :followers,
    through: :followerships,
    source: :follower


  attr_reader :password


  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil 
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
