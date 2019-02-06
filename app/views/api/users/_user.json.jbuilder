json.set! :user do 
   json.extract! user, :id, :username, :full_name, :bio
   json.photo url_for(user.photo)
   json.follower_ids user.followers.pluck(:id)
   json.following_ids user.followings.pluck(:id)
end 


json.set! :posts do 
   user.posts.each do |post|
      json.set! post.id do 
         json.extract! post, :id, :caption, :user_id, :created_at
         json.photo url_for(post.photo)
      end 
   end 
end

