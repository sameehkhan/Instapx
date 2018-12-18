json.set! @user.id do 
    json.extract! @user, :id, :full_name, :username, :bio, :post_ids
    json.image_url url_for(user.prof_pic)
end 

json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :caption, :image_url
      json.image_url asset_path(item.image_url)
    end
  end
end