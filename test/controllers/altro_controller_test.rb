require 'test_helper'

class AltroControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
