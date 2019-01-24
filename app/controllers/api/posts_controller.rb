class Api::PostsController < ApplicationController

def index
    @posts = Post.all    
    # @users = User.all
    
    # render :index
end

def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save 
        render :show  
    else 
        render json: @post.errors.full_messages, status: 422
    end  
end  

def show 
    @post = Post.find(params[:id])
    render :show
end 

def destroy
    @post = Post.find(params[:id])
    @post.delete! if @post
    render :show    
end

def post_params
    params.require(:post).permit(:caption, :photo)
end
end
