json.extract! @comment, :id, :body, :user_id, :image_id

json.username @comment.user.username
json.receiver_id @comment.receiver.id