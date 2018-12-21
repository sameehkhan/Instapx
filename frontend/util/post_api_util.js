export const fetchPosts = () => (
    $.ajax({
        url: `api/posts`,
        method: 'GET'
    })
);
export const fetchPost = (id) => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'GET'
    })
);

export const createPost = (post) => (
    $.ajax({
        url: `api/posts`,
        method: 'POST',
        processData: false,
        contentType: false,
        data: post
    })
);

export const deletePost = (id) => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'DELETE'
    })
);
