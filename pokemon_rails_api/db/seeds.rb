# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p1 = BasePokemon.create({natdexnum: 1, species: "Bulbasaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "./public/sprites/001.png", shiny_sprite: "./public/shiny_sprites/001.png"}})

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
