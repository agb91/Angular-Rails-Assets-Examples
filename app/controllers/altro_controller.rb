class AltroController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @nomeQuery = params[:nome]
    @ris = User.where(nome: params[:nome])
  end

end
