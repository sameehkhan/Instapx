#json.set! user.id do 
     # json.prof_pic url_for(user.prof_pic)
#end 

json.set! :user do 
   json.extract! user, :id, :username, :full_name, :bio
   if user.photo.nil? 
      json.photo url_for('/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--436bceed2cf735309de1252b9391752878e9f3a1/profile.png')
   else 
      json.photo url_for(user.photo)
   end 
end 



json.set! :posts do 
   user.posts.each do |post|
      json.set! post.id do 
         json.extract! post, :id, :caption, :user_id, :created_at
         json.photo url_for(post.photo)
      end 
   end 
end