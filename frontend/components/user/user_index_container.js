import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserIndex from './user_index';

const mstp = (state, ownProps) => {
    return ({
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        action : () => dispatch(logout())
    });
};

export default connect(
    mstp,
    mdtp
)(UserIndex);