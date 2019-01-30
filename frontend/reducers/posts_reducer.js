import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS} from '../actions/comment_actions';



import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return merge({}, action.posts);
        case RECEIVE_POST:
            return merge({}, state, { [action.post.id]: action.post });
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_CURRENT_USER:
        case RECEIVE_USER:
            return merge({}, state, action.posts);
        default:
            return state;
    }
};

export default postsReducer;