Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :show, :edit]
  post '/login', to: 'sessions#create'
  resources :trade_posts
  resources :natures, only: [:index]
  get '/abilities/:base_pokemon_id', to: 'abilities#show'
  # post '/init', to: ''
  resources :pokemons
  get '/base_pokemons/:natdexnum', to: 'base_pokemons#show'
end
