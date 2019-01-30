import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
    let currentUserId = state.session.id;
    let post = {
        caption: "",
        user_id: currentUserId
    };
    return ({
        post
     });
};

const mdtp = (dispatch) => {
    return ({
        action: (post) => dispatch(createPost(post))
    });
};

export default withRouter(connect(mstp, mdtp)(PostForm));