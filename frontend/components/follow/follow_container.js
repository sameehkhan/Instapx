import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';


const mstp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    let currId = state.session.id;
    let followingId = parseInt(ownProps.match.params.id);
    return ({
        currentUser,
        followingId,
        currId
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchUser: (id) => dispatch(fetchUser(id)),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (id) => dispatch(deleteFollow(id))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Follow));