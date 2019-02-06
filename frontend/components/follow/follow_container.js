import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { fetchUsers } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';


const mstp = (state, ownProps) => {
    // debugger
    let currentUser = state.entities.users[state.session.id];
    let following;
    return ({
        currentUser,
        following: currentUser.following_ids.includes(parseInt(ownProps.match.params.id))
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),

    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Follow));