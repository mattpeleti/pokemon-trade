# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#TESTPOKES#

p1 = BasePokemon.create({natdexnum: 1, species: "Bulbasaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "./public/sprites/001.png", shiny_sprite: "./public/shiny_sprites/001.png"})

p2 = BasePokemon.create({natdexnum: 2, species: "Ivysaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "./public/sprites/002.png", shiny_sprite: "./public/shiny_sprites/002.png"})

p3 = BasePokemon.create({natdexnum: 3, species: "Venusaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "./public/sprites/003.png", shiny_sprite: "./public/shiny_sprites/003.png"})

p4 = BasePokemon.create({natdexnum: 4, species: "Charmander", form: "standard", genders: "B", type1: "fire", type2: nil, sprite: "./public/sprites/004.png", shiny_sprite: "./public/shiny_sprites/004.png"})

p5 = BasePokemon.create({natdexnum: 5, species: "Charmeleon", form: "standard", genders: "B", type1: "fire", type2: nil, sprite: "./public/sprites/005.png", shiny_sprite: "./public/shiny_sprites/005.png"})

p6 = BasePokemon.create({natdexnum: 6, species: "Charizard", form: "standard", genders: "B", type1: "fire", type2: "flying", sprite: "./public/sprites/006.png", shiny_sprite: "./public/shiny_sprites/006.png"})

p7 = BasePokemon.create({natdexnum: 7, species: "Squirtle", form: "standard", genders: "B", type1: "water", type2: nil, sprite: "./public/sprites/007.png", shiny_sprite: "./public/shiny_sprites/007.png"})

p8 = BasePokemon.create({natdexnum: 8, species: "Wartortle", form: "standard", genders: "B", type1: "water", type2: nil, sprite: "./public/sprites/008.png", shiny_sprite: "./public/shiny_sprites/008.png"})

p9 = BasePokemon.create({natdexnum: 9, species: "Blastoise", form: "standard", genders: "B", type1: "water", type2: nil, sprite: "./public/sprites/009.png", shiny_sprite: "./public/shiny_sprites/009.png"})

p10 = BasePokemon.create({natdexnum: 10, species: "Caterpie", form: "standard", genders: "B", type1: "bug", type2: nil, sprite: "./public/sprites/010.png", shiny_sprite: "./public/shiny_sprites/010.png"})

p11 = BasePokemon.create({natdexnum: 11, species: "Metapod", form: "standard", genders: "B", type1: "bug", type2: nil, sprite: "./public/sprites/011.png", shiny_sprite: "./public/shiny_sprites/011.png"})

p12 = BasePokemon.create({natdexnum: 12, species: "Butterfree", form: "standard", genders: "B", type1: "bug", type2: "flying", sprite: "./public/sprites/012.png", shiny_sprite: "./public/shiny_sprites/012.png"})

#TESTMOVES#

tackle = Move.create({name: "Tackle", pp: 35, type: "Normal", category: "Physical"})

growl = Move.create({name: "Growl", pp: 40, type: "Normal", category: "Status"})

double_team = Move.create({name: "Double Team", pp: 15, type: "Normal", category: "Status"})

harden = Move.create({name: "Harden", pp: 30, type: "Normal", category: "Status"})

protect = Move.create({name: "Protect", pp: 10, type: "Normal", category: "Status"})

toxic = Move.create({name: "Toxic", pp: 10, type: "Poison", category: "Status"})

razor_leaf = Move.create({name: "Tackle", pp: 25, type: "Grass", category: "Physical"})

water_gun = Move.create({name: "Water Gun", pp: 25, type: "Water", category: "Special"})

ember = Move.create({name: "Ember", pp: 25, type: "Fire", category: "Special"})

bug_bite = Move.create({name: "Bug Bite", pp: 20, type: "Bug", category: "Physical"})



#NATURES#

brave = Nature.create({name: "Brave", inc_stat: "Attack", dec_stat: "Speed"})

hardy = Nature.create({name: "Hardy", inc_stat: "N/A", dec_stat: "N/A"})

lonely = Nature.create({name: "Lonely", inc_stat: "Attack", dec_stat: "Defense"})

adamant = Nature.create({name: "Adamant", inc_stat: "Attack", dec_stat: "Sp.Attack"})

naughty = Nature.create({name: "Naughty", inc_stat: "Attack", dec_stat: "Sp.Defense"})

bold = Nature.create({name: "Bold", inc_stat: "Defense", dec_stat: "Attack"})

docile = Nature.create({name: "Docile", inc_stat: "N/A", dec_stat: "N/A"})

relaxed = Nature.create({name: "Relaxed", inc_stat: "Defense", dec_stat: "Speed"})

impish = Nature.create({name: "Impish", inc_stat: "Defense", dec_stat: "Sp.Attack"})

lax = Nature.create({name: "Lax", inc_stat: "Defense", dec_stat: "Sp.Defense"})

timid = Nature.create({name: "Timid", inc_stat: "Speed", dec_stat: "Attack"})

hasty = Nature.create({name: "Hasty", inc_stat: "Speed", dec_stat: "Defense"})

serious = Nature.create({name: "Serious", inc_stat: "N/A", dec_stat: "N/A"})

jolly = Nature.create({name: "Jolly", inc_stat: "Speed", dec_stat: "Sp.Attack"})

naive = Nature.create({name: "Naive", inc_stat: "Speed", dec_stat: "Sp.Defense"})

modest = Nature.create({name: "Modest", inc_stat: "Sp.Attack", dec_stat: "Attack"})

mild = Nature.create({name: "Mild", inc_stat: "Sp.Attack", dec_stat: "Defense"})

quiet = Nature.create({name: "Quiet", inc_stat: "Sp.Attack", dec_stat: "Speed"})

bashful = Nature.create({name: "Bashful", inc_stat: "N/A", dec_stat: "N/A"})

rash = Nature.create({name: "Rash", inc_stat: "Sp.Attack", dec_stat: "Sp.Defense"})

calm = Nature.create({name: "Calm", inc_stat: "Sp.Defense", dec_stat: "Attack"})

gentle = Nature.create({name: "Gentle", inc_stat: "Sp.Defense", dec_stat: "Defense"})

sassy = Nature.create({name: "Sassy", inc_stat: "Sp.Defense", dec_stat: "Speed"})

careful = Nature.create({name: "Careful", inc_stat: "Sp.Defense", dec_stat: "Sp.Attack"})

quirky = Nature.create({name: "Quirky", inc_stat: "N/A", dec_stat: "N/A"})
