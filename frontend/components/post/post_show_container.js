import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, fetchPosts } from '../../actions/post_actions';

const mstp = (state, ownProps) => {
    // debugger
    let postId = ownProps.match.params.post_id;
    let userId = ownProps.match.params.id
    return ({
        postId: postId,
        post: state.entities.posts[postId],
        userId: userId
    });
};

const mdtp = (dispatch) => {
    return ({
        // fetchPosts: () => dispatch(fetchPosts())
        fetchPost: (id) => dispatch(fetchPost(id))
    });
};

export default withRouter(connect(mstp, mdtp)(PostShow));