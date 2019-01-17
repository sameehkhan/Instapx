require 'open-uri'
class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    image = open('https://s3-us-west-1.amazonaws.com/instapx-dev/4kiR8PbDgAibaVcrthWdAJr1')
    @user.photo = image
    # file = open('https://s3.us-west-1.amazonaws.com/instapx-dev/4kiR8PbDgAibaVcrthWdAJr1?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFoabubvDgatHQa%2BdiK4A5PpeIhfjfW%2BRrwXLyP9UVZhSuXAZDgMPdE40r%2FaehyFk3ZQ%2FovU%2BQ7iagUfDJrJhbPILdLgwtPT59ar7ESGl1FTikPs7CTzXRT0zJ0TlhnCQYQH0raXxz0YHcXDAmzXh0YmwlDLpMITGXDgyjbQe8QxNlHul6gxm3VilhY1daz%2FSMWuVijbRJMBu%2Fzl5VEz%2FHRVKoB2AzDvu1WypUqc6UJCdqcYg2V3Rs3fsm0Db%2F6hA0GueVka6kefkJodD2yLPNmNxVD5FrxR%2BY0nrsi9nckOypDy8nTSEswun0M9lV8d4NlDPSSSOgFB7OZeBPnke01To4q4rR%2BfuvuefbFsdM6WLQPcAURmMSHqojtifqqXVdJu1%2F3%2FDL1eYdpdtKJiqSrZXbImB1eeeGNe8ztuwGIWxICn5Xi0pnFz1MpE%2FaAwrQaVDfrAWjAM%2F6SGwUtfdok3NrAfK7xR4zYLSdXlY5XDc%2FlS75%2BClzIWd6mZhbefJwMT88tLE3amhZx9pdDB5r1Jin9VTTA2gRveXuG8XbQ0HbM%2BIrfm%2BuirQ%2FcXnpiw06MpTspEr9yYN7QSBEKhKKdy%2BFVs9np%2FKLO%2FvuEF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190104T232710Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASEMHSR43ZEQRXMU3%2F20190104%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=53f1de1f0e54c6b5a50ecc4404ea6abdd0e6fb9efb7ad7f32131d2047803f488')
    # @user.photo.attach(io: file, filename: 'profile.jpg')
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
