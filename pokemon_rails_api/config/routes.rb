Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :show, :edit]
  post '/login', to: 'sessions#create'
  resources :trade_posts
  resources :pokemon
end
