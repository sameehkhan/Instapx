import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';


const mstp = (state, ownProps) => {
    const userId = parseInt(state.session.id);
    // debugger
    const currentUser = state.entities.users[userId];
    const posts = Object.values(state.entities.posts).filter( post => currentUser.following_ids.includes(post.user_id));
    return ({
        currentUser,
        posts,
        userId
    }); 
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        fetchUser: (id) => dispatch(fetchUser(id))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Feed));