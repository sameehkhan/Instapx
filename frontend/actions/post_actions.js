import * as APIUtil from '../util/photos_api_util';

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

export const fetchPhotos = (userId) => dispatch => (
    APIUtil.fetchPhotos(userId).then(photos =>
        dispatch(receivePost(photos)))
);

export const fetchPhoto = id => dispatch => (
    APIUtil.fetchPhoto(id).then(post =>
        dispatch(receivePost(post)))
);

export const createPhoto = post => dispatch => (
    APIUtil.createPhoto(post).then(post =>
        dispatch(receivePost(post)))
);

export const deletePhoto = photoId => dispatch => (
    APIUtil.deletePhoto(photoId).then(post =>
        dispatch(removePost(photoId)))
);
