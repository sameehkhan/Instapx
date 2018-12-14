class ApplicationController < ActionController::Base

  helper_method :current_user, :require_login

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    unless logged_in?
      render json: { base: ['invalid credentials']}, status:401 
    end
  end
end
