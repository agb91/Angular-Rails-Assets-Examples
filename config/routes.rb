Rails.application.routes.draw do
  get 'second/index'
  get 'second/honeycomb'


  #get 'altro/index'
  #post 'altro/index'

  #get 'home/index'
  #get 'home/clientSideSearch'
  #get 'home/elencator'
  #get 'home/serverSideSearch'
  #get 'home/getEredi'

  root 'second#index'
end
