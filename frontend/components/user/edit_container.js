import { connect } from 'react-redux';
import Edit from './edit';
import { updateUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.id];
    return ({
        user
    });
};

const mdtp = (dispatch) => {
    return ({
        action: (user) => dispatch(updateUser(user))
    });
};

export default withRouter(connect(mstp, mdtp)(Edit));