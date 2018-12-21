#json.set! user.id do 
     # json.prof_pic url_for(user.prof_pic)
#end 

json.set! :user do 
   json.extract! user, :id, :username, :full_name
   json.photo url_for(user.photo)
end 


json.set! :posts do 
   user.posts.each do |post|
      json.set! post.id do 
         json.extract! post, :id, :caption, :user_id, :created_at
         json.photo url_for(post.photo)
      end 
   end 
end