class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    file = open('https://s3.us-west-1.amazonaws.com/instapx-dev/Di6DPHLBuWRj6UpQionxnyyw?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEGIaDN4TA%2BjVIWGlVmRw1CK4AyWBy5qdceQNSbC0EySnh1GqMKhQuvis0zpC5j4FmOwxUS0mz%2FRRnCYEGvbepzIX9h%2BliWlGVIX3%2FouU0QYl39JUQ%2BRZvnciUDo8hMDwCHPNjupHCV4MRDUhv9XXwfXH7c3w91Lfr9CcgH4vLHBaiFsEF2cOuHWdlyUHS6LfPgKLZW8HHill3yU4RwQzEqjROiLuuLtq%2BjjXmaWgYVHgvLjhuf6DD3QCcY2BCPieIuwW6CacAk7WYPE4jWQZZNwjx9S3cAPVvAG%2FguqBuLo8Pqnk%2BxHrwRfnaCaHM7y%2BJm9g5%2FYIA3PEqfOGwOKky99%2F7rUaiXVB9lLUhgWB9aS%2Flf%2F4L3rc%2FVO4%2FZaiMGOlua1Br8%2Fagka6mD5qBQZ0TFMcDugVEJbbti2qTq2P2aZlvCOEyLjV5bQB4xlHwerB8ik8ZFtoaiPmP1Wj8zgvmgo0f2oy4qPmSEg6qgB6%2B%2BhZvoepTbEQv8ppNnwCuZIn0fmf0xUsMm3p7S8YYjNMkPkS28OfSPX%2FQloZ4fTkhEgLz%2BoKQbiQh9dnlX21ySoSAujE%2FoUN00CZKtBriuhPHbDOmsPYL1X5E680KOzk8OAF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181221T004431Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASEMHSR435STSKTFD%2F20181221%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=24f1f21ddc02df60a28d7b869efef4f36420c6743e1c633fa9f2128c487d3a69')
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
    params.require(:user).permit(:username, :password, :full_name, :bio)
  end
end
