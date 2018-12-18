import { connect } from 'react-redux';
import UserShow from './user_show';
import { login, clearErrors } from '../../actions/session_actions';
import { selectAllErrors } from '../../reducers/selectors';


const mstp = (state, ownProps) => {
    return ({
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        
    });
};

export default connect(
    mstp,
    mdtp
)(UserShow);