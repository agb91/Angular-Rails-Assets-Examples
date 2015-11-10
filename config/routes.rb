Rails.application.routes.draw do
  get 'second/index'

  get 'altro/index'
  post 'altro/index'

  get 'home/index'
  get 'home/clientSideSearch'
  get 'home/elencator'
  get 'home/serverSideSearch'
  get 'home/getEredi'

  root 'home#index'
end
