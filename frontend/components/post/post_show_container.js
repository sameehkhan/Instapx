import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mstp = (state, ownProps) => {
    let postId = ownProps.match.params.id;
    return ({
        post: state.entities.posts[postId]
    });
};

const mdtp = (dispatch) => {
    return ({
        fetchPost: (id) => dispatch(fetchPost(id))
    });
};

export default withRouter(connect(mstp, mdtp)(PostShow));