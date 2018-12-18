json.users do 
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :username, :prof_pic, :bio
            json.profile_pic url_for(user.prof_pic)
        end 
    end 
end 