Rails.application.routes.draw do
  get 'home/index'
  namespace :api do
    namespace :v1 do
      get 'greeting/random_greeting'
    end
  end
  root 'home#index'
end
