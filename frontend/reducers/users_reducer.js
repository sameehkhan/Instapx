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
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS: 
      return merge({},action.users);
    case RECEIVE_FOLLOW:
      // debugger
      newState[action.follow.follower_id].following_ids.push(action.follow.user_id);
      newState[action.follow.user_id].follower_ids.push(action.follow.follower_id);
      return newState;
    case REMOVE_FOLLOW:
      // debugger
      let followingUserFollowingIds = newState[action.follow.follower_id].following_ids;
      let followedUserFollowerIds = newState[action.follow.user_id].follower_ids;

      newState[action.follow.user_id].follower_ids = followedUserFollowerIds.filter(id => id !== action.follow.follower_id);
      newState[action.follow.follower_id].following_ids = followingUserFollowingIds.filter(id => id !== action.follow.user_id);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

