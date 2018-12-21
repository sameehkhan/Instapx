import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mstp = (state, ownProps) => {
    let currentUserId = state.session.id;
    let post = {
        caption: "",
        user_id: currentUserId,
        photoFile: null
    };
    return ({
        post
     });
};

const mdtp = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createPost(post))
    });
};

export default withRouter(connect(mstp, mdtp)(PostForm));