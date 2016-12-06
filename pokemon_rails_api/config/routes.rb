Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :show, :edit]
  post '/login', to: 'sessions#create'
  get '/natures', to: 'data#get_natures'
  resources :trade_posts
  # post '/init', to: ''
  resources :pokemon
end
