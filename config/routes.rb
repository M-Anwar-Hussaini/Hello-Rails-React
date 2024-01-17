Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'greeting/random_greeting'
    end
  end
end
