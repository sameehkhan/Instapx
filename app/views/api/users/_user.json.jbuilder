#json.set! user.id do 
     # json.prof_pic url_for(user.prof_pic)
#end 

json.set! :user do 
   json.extract! user, :id, :username, :full_name, :bio
   if user.prof_pic.nil? 
      json.prof_pic url_for(user.prof_pic)
   else 
      json.prof_pic url_for('https://s3-us-west-1.amazonaws.com/instapx-dev/1bbAzYAX4P3YR3n57iqKE6P1')
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