import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment: comment
});

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments: comments
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment: comment
});


export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);

export const fetchComments = comments => dispatch => (
    CommentAPIUtil.fetchComments(comments)
        .then(comments => dispatch(receiveComments(comments)))
);

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
);