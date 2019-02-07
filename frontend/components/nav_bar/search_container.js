import { connect } from 'react-redux';
import Search from './search';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
    return ({
        users: Object.values(state.entities.users)
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers())
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Search));