import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';

const mstp = (state, ownProps) => {
    let userId = parseInt(state.session.id);
    let hasLiked = ownProps.likes.includes(userId);
    let postId = ownProps.postId;
    let likerIds = ownProps.likes;
    // debugger
    return ({
        userId,
        hasLiked,
        postId,
        likerIds
    });
};

const mdtp = (dispatch) => {
    return ({
       createLike: (like) => dispatch(createLike(like)),
       deleteLike: (post_id, user_id) => dispatch(deleteLike(post_id, user_id))

    });
};

export default withRouter(connect(mstp, mdtp)(Like));