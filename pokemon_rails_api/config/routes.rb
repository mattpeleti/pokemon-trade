Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    resources :users, only: [:create, :show, :destroy]
    post '/users/:id/edit', to: 'users#edit'
    post '/login', to: 'sessions#create'
    resources :trade_posts
    resources :natures, only: [:index]
    get '/abilities/:base_pokemon_id', to: 'abilities#show'
    resources :pokemons
    get '/base_pokemons/:natdexnum', to: 'base_pokemons#show'
  end

  # get '*path', to: 'catch_all#index'
end
