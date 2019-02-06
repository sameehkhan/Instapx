import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { fetchUsers, clearSearchedUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
    return ({
        currentUserId: state.session.id
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchUsers: () => dispatch(fetchAllUsers()),
        clearSearchedUsers: () => dispatch(clearSearchedUsers())
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(NavBar));