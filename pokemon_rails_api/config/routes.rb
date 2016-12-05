Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create]
  # post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  resources :trade_posts
  post '/init_post', to: 'trade_posts#set_id'
  resources :post_pokemon
end
