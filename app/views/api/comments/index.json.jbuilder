@comments.each do |comment|
  json.extract! comment, :id, :body, :user_id, :post_id
end