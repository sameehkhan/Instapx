json.array! @posts do |post|
  json.extract! post, :id, :caption
  json.photo url_for(post.photo)
end 




#json.posts do
  #@posts.each do |post|
    #json.set! post.id do
   #   json.partial! 'api/posts/post', post: post
  #  end
 # end
#end

#json.users do 
    #@users.each do |user|
        #json.set! user.id do 
       #     json.extract! user, :id, :username, :prof_pic, :bio
      #      json.profile_pic url_for(user.prof_pic)
            
     #       json.posts user.posts.each do |post|
    #            json.partial! 'api/posts/post', post: post
   #         end
  #      end 
 #   end 
#end 