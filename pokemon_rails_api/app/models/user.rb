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
  has_many :trade_posts, :trade_offers
  has_many :post_pokemons, :trade_posts
  has_many :offer_pokemons, :trade_offers


  validates :username, presence: true, length: {maximum: 20}
  validates :email, presence: true
  validates :friendcode, presence: true, length: {is: 12}
  validates_uniqueness_of :email, :username, :friendcode
  has_secure_password
end
