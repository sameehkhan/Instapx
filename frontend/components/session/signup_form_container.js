import { connect } from 'react-redux';
import SignupForm from './signup';
import { signup, clearErrors } from '../../actions/session_actions';
import { selectAllErrors } from '../../reducers/selectors';

const mstp = (state, ownProps) => {
  return ({
    formType: 'signup',
    errors: selectAllErrors(state)
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    action: user => dispatch(signup(user)),
    clear: () => dispatch(clearErrors())
  });
};

export default connect(
  mstp,
  mdtp
)(SignupForm);