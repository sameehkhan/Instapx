import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';


const mstp = (state, ownProps) => {
    return ({
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        action: () => dispatch(logout())
    });
};

export default connect(
    mstp,
    mdtp
)(NavBar);