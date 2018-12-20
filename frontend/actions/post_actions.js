import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = ({ post }) => ({
    type: RECEIVE_POST,
    post
});

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPosts().then(posts =>
        dispatch(receivePosts(posts)))
);

export const fetchPost = id => dispatch => (
    APIUtil.fetchPost(id).then(post =>
        dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
    APIUtil.createPost(post).then(post =>
        dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    APIUtil.deletePost(postId).then(postId =>
        dispatch(removePost(postId)))
);
