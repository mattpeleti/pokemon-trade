# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  password_digest :string
#  friendcode      :string
#  reputation      :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_many :pokemons
  has_many :trade_posts, through: :pokemons
	has_many :trade_offers, through: :pokemons
	has_many :requested_pokemons, through: :trade_posts

  # validates :username, presence: true, length: {maximum: 20}
  # validates :email, presence: true
  # validates :friendcode, presence: true, length: {is: 12}
  # validates_uniqueness_of :email, :username, :friendcode
  has_secure_password
end
