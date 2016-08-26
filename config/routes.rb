Rails.application.routes.draw do
  root 'pages#index'
  get '/about', to: 'pages#about'
  get '/menu', to: 'pages#menu'
  get '/contact', to: 'pages#contact'
  get '/hours', to: 'pages#hours'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
