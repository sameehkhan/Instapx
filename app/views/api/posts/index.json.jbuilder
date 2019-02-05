@posts.each do |post|
  json.set! post.id do 
    json.extract! post, :id, :user_id, :caption, :created_at
    json.photo_url url_for(post.photo)
    json.user_photo url_for(post.user.photo)
    json.username post.user.username
    json.comments do
      json.array!(post.comments) do |comment|
        json.id comment.id
            json.username comment.user.username
            json.body comment.body
            json.post_id comment.post_id
            json.user_id comment.user_id
      end
    end
    json.liker_ids post.likers.pluck(:id)
    json.created_at post.created_at.strftime("%B %d, %Y")
  end 
end 



