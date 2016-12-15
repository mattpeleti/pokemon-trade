require 'open-uri'
require 'nokogiri'


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
