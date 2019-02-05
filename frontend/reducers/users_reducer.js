import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS: 
      return action.users;
    // case RECEIVE_LIKE:
    //   // debugger
    //   newState[action.like.post_id].liker_ids.push(action.like.user_id);
    //   return newState;
    // case RECEIVE_COMMENT:
    //   const newPost = merge({}, state[action.comment.post_id]);
    //   newPost.comments.unshift(action.comment);
    //   return merge({}, state, { [action.comment.post_id]: newPost });
    // case REMOVE_LIKE:
    //   // debugger
    //   newState[action.like.post_id].liker_ids = newState[action.like.post_id].liker_ids.filter(id => id !== action.like.user_id);
    //   return newState;
    case RECEIVE_FOLLOW:
      newState[action.follow.user_id].follower_ids.push(action.follow.follower_id);
      newState[action.follow.follower_id].followingIds.push(action.follow.user_id);
      return newState;
    case REMOVE_FOLLOW:
      let followedUserFollowerIds = newState[action.follow.user_id].follower_ids;
      let followingUserFollowingIds = newState[action.follow.follower_id].followingIds;

      newState[action.follow.user_id].follower_ids = followedUserFollowerIds.filter(id => id !== action.follow.follower_id);
      newState[action.follow.follower_id].followingIds = followingUserFollowingIds.filter(id => id !== action.follow.user_id);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

