import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
    return ({
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Feed));