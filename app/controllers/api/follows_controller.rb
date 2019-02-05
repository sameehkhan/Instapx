class Api::FollowsController < ApplicationController

    # def index
        
    # end

    def create
        @follow = Follow.new(follow_params)
        @follow.follower_id = current_user.id 
        @follow.save
        render :show
    end

    def destroy
        @follow = Follow.wehere(user_id: params[:id]).where(follower_id: current_user.id)[0]
        @follow.destroy
        render :show
    end

    def follow_params
        params.requre(:follow).permit(:user_id, :follower_id)
    end 

end
