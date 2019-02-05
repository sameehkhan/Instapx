import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';


const mstp = (state, ownProps) => {
    const posts = Object.values(state.entities.posts);
    const users = state.entities.users;
    return ({
        posts, 
        users,
        // comments
    }); 
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts())
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Feed));