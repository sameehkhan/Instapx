import {
    RECEIVE_USERS,
    CLEAR_SEARCH
} from '../actions/user_actions';

const searchedUsersReducer = (prevState = {}, action) => {
    Object.freeze(prevState);

    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.users);
        case CLEAR_SEARCH:
            return {};
        default:
            return prevState;
    }
};

export default searchedUsersReducer;