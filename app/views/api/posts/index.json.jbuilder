@posts.each do |post|
  json.set! post.id do 
    json.extract! post, :id, :user_id, :caption, :photo
    json.photo_url url_for(post.photo)
    json.user_photo url_for(post.user.photo)
    json.username post.user.username
  end 
end 



