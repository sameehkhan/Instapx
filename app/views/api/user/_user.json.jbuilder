json.set! @user.id do 
    json.extract! user, :id, :username, :full_name, :bio
    json.prof_pic url_for(user.prof_pic)
end 


json.posts user.posts.each do |post|
  json.extract! post, :id, :caption, :created_at
  json.photo url_for(post.photo)
end