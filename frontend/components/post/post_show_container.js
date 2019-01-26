import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, fetchPosts } from '../../actions/post_actions';

const mstp = (state, ownProps) => {
    // debugger
    let postId = ownProps.match.params.post_id;
    return ({
        postId: postId,
        post: state.entities.posts[postId]
    });
};

const mdtp = (dispatch) => {
    return ({
        // fetchPosts: () => dispatch(fetchPosts())
        fetchPost: (id) => dispatch(fetchPost(id))
    });
};

export default connect(mstp, mdtp)(PostShow);