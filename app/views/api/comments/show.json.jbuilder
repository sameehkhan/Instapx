json.extract! @comment, :id, :body, :user_id, :image_id

json.username @comment.user.username
json.poster_id @comment.poster.id