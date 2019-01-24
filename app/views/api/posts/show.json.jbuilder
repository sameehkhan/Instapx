json.extract! @post, :id, :caption, :photo
json.photo url_for(@post.photo)