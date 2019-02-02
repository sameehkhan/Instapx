import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';
// import { fetchUsers } from '../../actions/user_actions';

const mstp = (state, ownProps) => {
    debugger
    // debugger
    // let postId = ownProps.match.params.post_id;
    // let userId = ownProps.match.params.id;
    // let likes = state.entities.posts[postId].liker_ids.length;
    return ({
    
    });
};

const mdtp = (dispatch) => {
    return ({
       createLike: (like) => dispatch(createLike(like)),
       deleteLike: (id) => dispatch(deleteLike(id))

    });
};

export default withRouter(connect(mstp, mdtp)(Like));