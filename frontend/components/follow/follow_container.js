import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { fetchUsers } from '../../actions/user_actions';


const mstp = (state, ownProps) => {
    let current_user = state.entities.users[state.session.id]
    return ({
        current_user

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