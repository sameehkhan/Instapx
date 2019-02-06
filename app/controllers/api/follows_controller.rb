class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow_params)
        @follow.follower_id = current_user.id 
        @follow.save
        render :show
    end

    def destroy
        @follow = Follow.where(user_id: params[:id]).where(follower_id: current_user.id)[0]
        @follow.destroy
        render :show
    end

    def follow_params
        params.require(:follow).permit(:user_id)
    end 

end
