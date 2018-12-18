class Api::PostsController < ApplicationController

def show 
    @post = Post.find(params[:id])
    render :show
end 

def post_params
    params.require(:caption).permit(:title, photos: [])
end
end
