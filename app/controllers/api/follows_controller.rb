class Api::FollowsController < ApplicationController

    def index
        
    end

    def create
        
    end

    def destroy
        
    end

    def follow_params
        params.requre(:follow).permit(:user_id, :follower_id)
    end 

end
