@posts.each do |post|
  json.set! post.id do 
    json.extract! post, :id, :user_id, :caption, :photo
    json.photo url_for(post.photo)
    json.user_photo url_for(post.user.photo)
  end 
end 



