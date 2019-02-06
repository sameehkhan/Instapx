import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { fetchUsers } from '../../actions/user_actions';


const mstp = (state, ownProps) => {
    // debugger
    let currentUser = state.entities.users[state.session.id];=
    return ({
        currentUser

    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers())
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Follow));