json.extract! post, :caption, :id, :created_at
json.photo url_for(post.photo)
json.post_user post.user_id