import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = user => dispatch => {
  return APIUtils.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)), 
    (error) => dispatch(receiveErrors(error.responseJSON)));
};

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  data: {}
});

export const logout = () => dispatch => {
  return APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()));
};



export const signup = user => dispatch => {
  return APIUtils.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
    (error) => dispatch(receiveErrors(error.responseJSON)));
};


export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
