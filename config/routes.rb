Rails.application.routes.draw do
  devise_for :users, :skip => [:registrations]
  root to: "pages#home"
  get "/experiment", to: "pages#experiment"
  get "/avtechdaddy", to: "pages#avtechdaddy"
  get "/defit", to: "pages#defit"
  get "/deepwork", to: "pages#deepwork"
  get "/filmyj", to: "pages#filmyj"
  get "/test", to: "pages#test", as: :test
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
