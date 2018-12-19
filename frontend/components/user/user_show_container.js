import { connect } from 'react-redux';
import UserShow from './user_show';
import { receiveCurrentUser } from '../../actions/session_actions';


const mstp = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.id]
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        logout: () => dispatch(logout())
    });
};

export default connect(
    mstp,
    mdtp
)(UserShow);