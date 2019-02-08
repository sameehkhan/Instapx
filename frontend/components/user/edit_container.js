import { connect } from 'react-redux';
import Edit from './edit';
import { updateUser } from '../../actions/user_actions';
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
        action: (id) => dispatch(updateUser(id))
    });
};

export default withRouter(connect(mstp, mdtp)(Edit));