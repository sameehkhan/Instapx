class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    file = open('https://s3-us-west-1.amazonaws.com/instapx-dev/Di6DPHLBuWRj6UpQionxnyyw')
    @user.photo.attach(io: file, filename: 'sennacy.jpg')
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
    params.require(:user).permit(:username, :password, :full_name, :bio, :photo)
  end
end
