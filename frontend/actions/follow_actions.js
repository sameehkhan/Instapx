import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow: follow
});

const removeLike = follow => ({
    type: REMOVE_FOLLOW,
    follow: follow
});

export const createFollow = follow => dispatch => (
    LikeAPIUtil.createFollow(follow)
        .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = id => dispatch => (
    LikeAPIUtil.deleteFollow(id)
        .then(follow => dispatch(removeLike(follow)))
);