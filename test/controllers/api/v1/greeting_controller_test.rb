require 'test_helper'

class Api::V1::GreetingControllerTest < ActionDispatch::IntegrationTest
  test 'should get random_greeting' do
    get api / v1_greeting_random_greeting_url
    assert_response :success
  end
end
