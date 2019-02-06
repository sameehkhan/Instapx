import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';


const mstp = (state, ownProps) => {
    // debugger
    let currentUser = state.entities.users[state.session.id];
    let currId = state.session.id;
    let followingId = parseInt(ownProps.match.params.id);
    // debugger
    return ({
        currentUser,
        followingId,
        currId
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchUser: (id) => dispatch(fetchUser(id)),

    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Follow));