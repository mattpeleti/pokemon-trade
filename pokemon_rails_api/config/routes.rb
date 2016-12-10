Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    get '/users/:id/pokemons', to: 'pokemons#index'
    post '/users/:id/pokemons', to: 'pokemons#create'
    resources :users, only: [:create, :show, :destroy, :update]
    post '/login', to: 'sessions#create'
    resources :trade_posts
    resources :natures, only: [:index]
    get '/base_pokemons/:id/abilities', to: 'abilities#show'
    get '/base_pokemons/:natdexnum', to: 'base_pokemons#show'
  end

  # get '*path', to: 'catch_all#index'
end
