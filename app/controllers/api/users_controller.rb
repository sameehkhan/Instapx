class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = current_user
    if @user.update_attributes(update_user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


def show
    @user = User.find(params[:id])
    render :show
end

  private
  def user_params
    params.require(:user).permit(:username, :password, :full_name, :bio)
  end
end
