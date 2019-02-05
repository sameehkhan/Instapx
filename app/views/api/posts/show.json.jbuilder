json.extract! @post, :id, :caption, :user_id
json.photo url_for(@post.photo)
json.created_at @post.created_at.strftime("%B%d,%Y")


#json.set! @post do 
  # json.extract! @post, :id, :caption
 #  json.photo url_for(@post.photo)
#end 