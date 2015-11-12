=beginclass HomeController < ApplicationController

  def index
    @persone = User.all
  end

end
=end
