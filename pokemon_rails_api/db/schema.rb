# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161210053313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "base_pokemon_abilities", force: :cascade do |t|
    t.integer  "base_pokemon_id"
    t.integer  "ability_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "base_pokemon_moves", force: :cascade do |t|
    t.integer  "base_pokemon_id"
    t.integer  "move_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "base_pokemons", force: :cascade do |t|
    t.integer  "natdexnum"
    t.string   "species"
    t.string   "sprite"
    t.string   "shiny_sprite"
    t.string   "form"
    t.string   "genders"
    t.string   "type1"
    t.string   "type2"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "ivs", force: :cascade do |t|
    t.integer "hp"
    t.integer "attack"
    t.integer "defense"
    t.integer "sp_attack"
    t.integer "sp_defense"
    t.integer "speed"
    t.integer "pokemon_id"
  end

  create_table "moves", force: :cascade do |t|
    t.string   "name"
    t.integer  "pp"
    t.string   "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "move_type"
  end

  create_table "natures", force: :cascade do |t|
    t.string   "name"
    t.string   "inc_stat"
    t.string   "dec_stat"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pokemon_abilities", force: :cascade do |t|
    t.integer "pokemon_id"
    t.integer "ability_id"
  end

  create_table "pokemon_moves", force: :cascade do |t|
    t.integer "pokemon_id"
    t.integer "move_id"
  end

  create_table "pokemon_natures", force: :cascade do |t|
    t.integer "pokemon_id"
    t.integer "nature_id"
  end

  create_table "pokemons", force: :cascade do |t|
    t.integer "user_id"
    t.integer "base_pokemon_id"
    t.string  "nickname"
    t.integer "level"
    t.string  "gender"
    t.boolean "shiny"
    t.string  "held_item"
    t.string  "pokeball"
  end

  create_table "requested_pokemon_abilities", force: :cascade do |t|
    t.integer "requested_pokemon_id"
    t.integer "ability_id"
  end

  create_table "requested_pokemon_natures", force: :cascade do |t|
    t.integer "requested_pokemon_id"
    t.integer "nature_id"
  end

  create_table "requested_pokemons", force: :cascade do |t|
    t.integer  "natdexnum"
    t.string   "form"
    t.integer  "min_level"
    t.integer  "max_level"
    t.boolean  "shiny"
    t.string   "gender"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "trade_post_id"
    t.integer  "base_pokemon_id"
  end

  create_table "stats", force: :cascade do |t|
    t.integer "hp"
    t.integer "attack"
    t.integer "defense"
    t.integer "sp_attack"
    t.integer "sp_defense"
    t.integer "speed"
    t.integer "pokemon_id"
  end

  create_table "trade_offers", force: :cascade do |t|
    t.string   "comment"
    t.string   "status"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id"
    t.integer  "trade_post_id"
  end

  create_table "trade_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "status"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "pokemon_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.string   "friendcode"
    t.integer  "reputation"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
