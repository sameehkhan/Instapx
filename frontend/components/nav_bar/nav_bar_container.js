import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
    return ({
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        action: () => dispatch(logout())
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(NavBar));