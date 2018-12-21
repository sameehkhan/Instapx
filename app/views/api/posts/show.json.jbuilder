json.extract! @post, :id, :caption
json.photo url_for(@post.photo)