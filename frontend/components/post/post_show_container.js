import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mstp = (state, ownProps) => {
    // debugger
    let postId = ownProps.match.params.post_id;
    let userId = ownProps.match.params.id;
    let likes = state.entities.posts[postId].liker_ids.length;
    let allLikes = state.entities.posts[postId].liker_ids;
    return ({
        postId: postId,
        post: state.entities.posts[postId],
        userId: userId,
        likes,
        allLikes
    });
}

const mdtp = (dispatch) => {
    return ({
        // fetchPosts: () => dispatch(fetchPosts())
        fetchPost: (id) => dispatch(fetchPost(id))
        // fetchUsers: () => dispatch(fetchUsers())
    });
};

export default withRouter(connect(mstp, mdtp)(PostShow));