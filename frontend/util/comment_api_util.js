export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        processData: false,
        contentType: false,
        data: comment
    })
);

export const fetchComments = () => (
    $.ajax({
        url: `api/comments`,
        method: 'GET'
    })
);

// export const fetchComments = postId => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/comments',
//         data: { postId }
//     })
// );

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    })
);