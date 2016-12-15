pokemon_cards.each {|pokemon|
  if pokemon.css('small.aside>a').length == 2
    puts "Name: " + pokemon.css('a.ent-name').text + "| Pokedex Num:" + pokemon.css('small')[0] + "| Type: " + pokemon.css('small.aside>a')[0].text + "/" + pokemon.css('small.aside>a')[1].text
  else
    puts "Name: " + pokemon.css('a.ent-name').text + "| Pokedex Num:" + pokemon.css('small')[0] + "| Type: " + pokemon.css('small.aside>a')[0].text
  end
}
