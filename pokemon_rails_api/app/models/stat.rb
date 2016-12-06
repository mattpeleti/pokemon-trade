# == Schema Information
#
# Table name: stats
#
#  id         :integer          not null, primary key
#  hp         :integer
#  attack     :integer
#  defense    :integer
#  sp_attack  :integer
#  sp_defense :integer
#  speed      :integer
#  pokemon_id :integer
#

class Stat < ApplicationRecord
  belongs_to :pokemon
end
