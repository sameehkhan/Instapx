class Api::CommentsController < ApplicationController
  def index
    # @comments = Post.where(post_id: params[:id])
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save 
        render :show
    else 
        render json: @comment.errors.full_messages, status: 422
    end  
end  

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:post_id, :body, :user_id)
  end
end