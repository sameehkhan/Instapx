import { connect } from 'react-redux';
import LoginForm from './login';
import { login, clearErrors } from '../../actions/session_actions';
import { selectAllErrors } from '../../reducers/selectors';


const mstp = (state, ownProps) => {
  return ({
    formType: 'login',
    errors: selectAllErrors(state)
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    action: user => dispatch(login(user)),
    clear: () => dispatch(clearErrors())
  });
};

export default connect(
  mstp,
  mdtp
)(LoginForm);