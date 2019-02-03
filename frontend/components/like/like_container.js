import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';
// import { fetchUsers } from '../../actions/user_actions';

const mstp = (state, ownProps) => {
    let user_id = parseInt(state.session.id);
    let hasLiked = ownProps.likes.includes(id);
    // debugger
    return ({
        user_id,
        hasLiked
    });
};

const mdtp = (dispatch) => {
    return ({
       createLike: (like) => dispatch(createLike(like)),
       deleteLike: (id) => dispatch(deleteLike(id))

    });
};

export default withRouter(connect(mstp, mdtp)(Like));