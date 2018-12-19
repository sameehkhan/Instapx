import { connect } from 'react-redux';
import UserShow from './user_show';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';



const mstp = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.id],
        currentUserId: state.session.currentUser
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        logout: () => dispatch(logout()),
        fetchUser: (id) =>dispatch(fetchUser(id))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(UserShow));