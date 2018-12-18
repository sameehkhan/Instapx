Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :posts, only: [:show, :create, :index, :destroy]
  end
 
  root to: 'static_pages#root'
end
