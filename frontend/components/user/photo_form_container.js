import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';



const mstp = (state, ownProps) => {
    // const posts = Object.values(state.entities.posts).filter(post => post.user_id === parseInt(ownProps.match.params.id));
    return ({
        // user: state.entities.users[ownProps.match.params.id],
        // posts
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        // action: () => dispatch(logout()),
        createPost: (post) => dispatch(createPost(post))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(PostForm));