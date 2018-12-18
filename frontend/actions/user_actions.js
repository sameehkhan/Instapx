import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";


export const fetchUsers = () => {
    return (dispatch) => {
        return UserAPIUtil.fetchUsers().then(users => {
            return dispatch({ type: RECEIVE_USERS, users: users });
        });
    };
};
export const fetchUser = (id) => {
    return (dispatch) => {
        return UserAPIUtil.fetchUser(id).then(user => {
            return dispatch({ type: RECEIVE_USER, user: user });
        });
    };
};

export const updateUser = (user) => {
    return (dispatch) => {
        return UserAPIUtil.updateUser(user).then(user => {
            return dispatch({ type: RECEIVE_USER, user: user });
        });
    };
};


