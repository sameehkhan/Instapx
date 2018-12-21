#@users.each do |user|
   #json.set! user.id do 
    # json.partial! 'api/users/user', user: user
  #end 
#end 


@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :username, :full_name, :bio
        json.photo url_for(user.photo)
    end 
end 