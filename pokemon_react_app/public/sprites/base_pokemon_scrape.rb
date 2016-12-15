require 'open-uri'
require 'nokogiri'
# require 'byebug'

URL = 'http://www.serebii.net'
pkmn_db = Nokogiri::HTML(open("http://pokemondb.net/pokedex/shiny"))

all_pokemon = pkmn_db.css('.infocard-tall')


all_pokemon.each do |pokemon|
  # sleep(0.5)
  species = pokemon.css('.ent-name').text
  natdexnum = pokemon.css('small')[0].text[1..3] #001
   next unless natdexnum.to_i > 562
  if pokemon.css('small.aside>a').length == 2
    type1 = pokemon.css('small.aside>a')[0].text
    type2 = pokemon.css('small.aside>a')[1].text
  else
    type1 = pokemon.css('small.aside>a')[0].text
    type2 = nil
  end
  puts natdexnum
  uri = URI.join( URL, "/sunmoon/pokemon/#{natdexnum}.png").to_s
  File.open(File.basename(uri),'wb'){ |f| f.write(open(uri).read)}
  sleep(1)
end
