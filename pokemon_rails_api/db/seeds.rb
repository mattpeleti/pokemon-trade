# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  # BasePokemon.create({natdexnum: natdexnum.to_i, species: species, form: "standard", genders: "B", type1: type1, type2: type2, sprite: "/sprites/001.png", shiny_sprite: "/shiny_sprites/001.png"})

  # BasePokemon.find(1).abilities = [overgrow, chlorophyll]
  # BasePokemon.find(2).abilities = [overgrow, chlorophyll]
  # BasePokemon.find(3).abilities = [overgrow, chlorophyll]
  # BasePokemon.find(4).abilities = [blaze, solar_power]
  # BasePokemon.find(5).abilities = [blaze, solar_power]
  # BasePokemon.find(6).abilities = [blaze, solar_power]
  # BasePokemon.find(7).abilities = [torrent, rain_dish]
  # BasePokemon.find(8).abilities = [torrent, rain_dish]
  # BasePokemon.find(9).abilities = [torrent, rain_dish]
  # BasePokemon.find(10).abilities = [shield_dust, run_away]
  # BasePokemon.find(11).abilities = [shed_skin]
  # BasePokemon.find(12).abilities = [compoundeyes, tinted_lens]


#TEST POKES#

# p1 = BasePokemon.create({natdexnum: 1, species: "Bulbasaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "/sprites/001.png", shiny_sprite: "/shiny_sprites/001.png"})
#
# p2 = BasePokemon.create({natdexnum: 2, species: "Ivysaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "/sprites/002.png", shiny_sprite: "/shiny_sprites/002.png"})
#
# p3 = BasePokemon.create({natdexnum: 3, species: "Venusaur", form: "standard", genders: "B", type1: "grass", type2: "poison", sprite: "/sprites/003.png", shiny_sprite: "/shiny_sprites/003.png"})
#
# p4 = BasePokemon.create({natdexnum: 4, species: "Charmander", form: "standard", genders: "B", type1: "fire", type2: nil, sprite: "/sprites/004.png", shiny_sprite: "/shiny_sprites/004.png"})
#
# p5 = BasePokemon.create({natdexnum: 5, species: "Charmeleon", form: "standard", genders: "B", type1: "fire", type2: nil, sprite: "/sprites/005.png", shiny_sprite: "/shiny_sprites/005.png"})
#
# p6 = BasePokemon.create({natdexnum: 6, species: "Charizard", form: "standard", genders: "B", type1: "fire", type2: "flying", sprite: "/sprites/006.png", shiny_sprite: "/shiny_sprites/006.png"})
#
# p7 = BasePokemon.create({natdexnum: 7, species: "Squirtle", form: "standard", genders: "B", type1: "water", type2: nil, sprite: "/sprites/007.png", shiny_sprite: "/shiny_sprites/007.png"})
#
# p8 = BasePokemon.create({natdexnum: 8, species: "Wartortle", form: "standard", genders: "B", type1: "water", type2: nil, sprite: "/sprites/008.png", shiny_sprite: "/shiny_sprites/008.png"})
#
# p9 = BasePokemon.create({natdexnum: 9, species: "Blastoise", form: "standard", genders: "B", type1: "water", type2: nil, sprite: "/sprites/009.png", shiny_sprite: "/shiny_sprites/009.png"})
#
# p10 = BasePokemon.create({natdexnum: 10, species: "Caterpie", form: "standard", genders: "B", type1: "bug", type2: nil, sprite: "/sprites/010.png", shiny_sprite: "/shiny_sprites/010.png"})
#
# p11 = BasePokemon.create({natdexnum: 11, species: "Metapod", form: "standard", genders: "B", type1: "bug", type2: nil, sprite: "/sprites/011.png", shiny_sprite: "/shiny_sprites/011.png"})
#
# p12 = BasePokemon.create({natdexnum: 12, species: "Butterfree", form: "standard", genders: "B", type1: "bug", type2: "flying", sprite: "/sprites/012.png", shiny_sprite: "/shiny_sprites/012.png"})
#

require 'open-uri'
require 'nokogiri'


#TEST MOVES#

# tackle = Move.create({name: "Tackle", pp: 35, move_type: "Normal", category: "Physical"})
#
# growl = Move.create({name: "Growl", pp: 40, move_type: "Normal", category: "Status"})
#
# double_team = Move.create({name: "Double Team", pp: 15, move_type: "Normal", category: "Status"})
#
# harden = Move.create({name: "Harden", pp: 30, move_type: "Normal", category: "Status"})
#
# protect = Move.create({name: "Protect", pp: 10, move_type: "Normal", category: "Status"})
#
# toxic = Move.create({name: "Toxic", pp: 10, move_type: "Poison", category: "Status"})
#
# razor_leaf = Move.create({name: "Tackle", pp: 25, move_type: "Grass", category: "Physical"})
#
# water_gun = Move.create({name: "Water Gun", pp: 25, move_type: "Water", category: "Special"})
#
# ember = Move.create({name: "Ember", pp: 25, move_type: "Fire", category: "Special"})
#
# bug_bite = Move.create({name: "Bug Bite", pp: 20, move_type: "Bug", category: "Physical"})


#TEST ABILITIES#

# overgrow = Ability.create({name: "Overgrow", description: "When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%."})
#
# chlorophyll = Ability.create({name: "Chlorophyll", description: "When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight."})
#
# blaze = Ability.create({name: "Blaze", description: "When HP is below 1/3rd its maximum, power of Fire-type moves is increased by 50%."})
#
# solar_power = Ability.create({name: "Solar Power", description: "During sunshine, the Pokémon’s Special Attack raises to 1.5 times but HP decreases by 1/8th the maximum HP every turn."})
#
# torrent = Ability.create({name: "Torrent", description: "When HP is below 1/3rd its maximum, power of Water-type moves is increased by 50%."})
#
# rain_dish = Ability.create({name: "Rain Dish", description: "If Heavy Rain weather is in effect, recovers 1/16th max Hit Points at the end of the turn."})
#
# shield_dust = Ability.create({name: "Shield Dust", description: "Damaging moves used by the opponent will not have an additional effect."})
#
# run_away = Ability.create({name: "Run Away", description: "Except for trainer battles, can always run from battle. Cannot run during Mean Look or Block or when the opponent is trapping with the Arena Trap, Magnet Pull, or Shadow Tag ability."})
#
# shed_skin = Ability.create({name: "Shed Skin", description: "Every turn, it has a 1 in 3 chance of healing from a status condition (BURN, PARALYZE, SLEEP, POISON, FREEZE)."})
#
# compoundeyes = Ability.create({name: "Compoundeyes", description: "Raises the Pokémon’s accuracy by 30%."})
#
# tinted_lens = Ability.create({name: "Tinted Lens", description: "The power of “not very effective” moves is doubled."})


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


##CREATING BASE POKES##


# URL = 'http://www.serebii.net' ##USED TO SCRAPE FOR SPRITES
pkmn_db = Nokogiri::HTML(open("http://pokemondb.net/pokedex/shiny"))

all_pokemon = pkmn_db.css('.infocard-tall')


all_pokemon.each do |pokemon|
  # sleep(0.5)
  species = pokemon.css('.ent-name').text
  natdexnum = pokemon.css('small')[0].text[1..3] #001
  if pokemon.css('small.aside>a').length == 2
    type1 = pokemon.css('small.aside>a')[0].text
    type2 = pokemon.css('small.aside>a')[1].text
  else
    type1 = pokemon.css('small.aside>a')[0].text
    type2 = nil
  end
  BasePokemon.create({natdexnum: natdexnum.to_i, species: species, form: "standard", genders: "B", type1: type1, type2: type2, sprite: "/sprites/#{natdexnum}.png", shiny_sprite: "/shiny_sprites/#{natdexnum}.png"})
  # uri = URI.join( URL, "/sunmoon/pokemon/#{natdexnum}.png").to_s ##USED TO SCRAPE FOR SPRITES
  # uri = URI.join( URL, "/Shiny/SM/#{natdexnum}.png").to_s        ##USED TO SCRAPE FOR SHINY SPRITES

  #File.open(File.basename(uri),'wb'){ |f| f.write(open(uri).read)} ##USED TO SCRAPE FOR SPRITES

end



##ABILITIES

URL = 'http://pokemondb.net/pokedex/'

BasePokemon.all.each do |pokemon|
  abilities = []

  formattedNDN = pokemon.natdexnum.to_s
  (3 - formattedNDN.length).times {formattedNDN.prepend("0") }
                                  #pokemon.abilites to assign the new abilities
                                  #find or create by
  if pokemon.natdexnum == 29
     uri = URI.join( URL, "nidoran-f")
  elsif pokemon.natdexnum == 32
    uri = URI.join( URL, "nidoran-m")
  elsif pokemon.natdexnum == 83
    uri = URI.join( URL, "farfetchd")
  elsif pokemon.natdexnum == 122
    uri = URI.join( URL, "mr-mime")
  elsif pokemon.natdexnum == 439
    uri = URI.join( URL, "mime-jr")
  elsif pokemon.natdexnum == 669
    uri = URI.join( URL, "flabebe")
  elsif pokemon.natdexnum == 772
    uri = URI.join( URL, "type-null")
  elsif pokemon.natdexnum == 785
    uri = URI.join( URL, "tapu-koko")
  elsif pokemon.natdexnum == 786
    uri = URI.join( URL, "tapu-lele")
  elsif pokemon.natdexnum == 787
    uri = URI.join( URL, "tapu-bulu")
  elsif pokemon.natdexnum == 788
    uri = URI.join( URL, "tapu-fini")
  else
    uri = URI.join( URL, pokemon.species.downcase).to_s
  end
  pkmn_page = Nokogiri::HTML(open(uri))
  abilities.concat(pkmn_page.css('.vitals-table>tbody>tr')[5].css('td>a').map(&:text))
  hiddenability = pkmn_page.css('.vitals-table>tbody>tr')[5].css('td>small').text[0..-18]
  if hiddenability != ""
    abilities << hiddenability
  end
  ab_objs = abilities.map {|name| Ability.find_or_create_by(name: name)}
  pokemon.abilities = ab_objs
  pokemon.sprite = "/sprites/#{formattedNDN}.png"
  pokemon.shiny_sprite = "/shiny_sprites/#{formattedNDN}.png"
  puts formattedNDN
  sleep(1)
end

  # pkmn_page.css('.vitals-table>tbody>tr')[5].css('td>a')  GETS TO THE ABILITES TABLE
  # pkmn_page.css('.vitals-table>tbody>tr')[5].css('td>a').map(&:text) gives us an array of the natural ability ["Huge Power", "Thick Fat"]
  # pkmn_page.css('.vitals-table>tbody>tr')[5].css('td>small').text[0..-18] "Sap Sipper"
