# == Schema Information
#
# Table name: ivs
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

#  pokemon_id   :integer
#  hp           :integer
#  attack       :integer
#  defense      :integer
#  sp_attack    :integer
#  sp_defense   :integer

class Iv < ApplicationRecord
  belongs_to :pokemon
end
