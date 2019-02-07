#@users.each do |user|
 #  json.partial! 'api/users/user', user: user
#end 


@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :username, :full_name, :photo
        json.photo url_for(user.photo)
        json.follower_ids user.followers.pluck(:id)
        json.following_ids user.followings.pluck(:id)
    end 
end 