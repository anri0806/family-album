Rails.application.routes.draw do
  
  resources :users, only: [:index] do
    ##### CHECK if I can render custom nested attributes to remove unneccesary atr
    resources :pictures, only: [:index]
  end

  resources :pictures, only: [:index, :show, :create]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
