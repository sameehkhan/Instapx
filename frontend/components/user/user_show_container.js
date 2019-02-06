import { connect } from 'react-redux';
import UserShow from './user_show';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';



const mstp = (state, ownProps) => {
    // debugger
    let curr = state.session.id;
    const posts = Object.values(state.entities.posts).filter(post => post.user_id === parseInt(ownProps.match.params.id));
    return ({
        user: state.entities.users[ownProps.match.params.id],
        posts,
        curr
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        action: () => dispatch(logout()),
        fetchUser: (id) =>dispatch(fetchUser(id))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(UserShow));