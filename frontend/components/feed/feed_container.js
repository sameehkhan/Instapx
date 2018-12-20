import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';
import {  } from ''

const mstp = (state, ownProps) => {
    const posts = Object.values(state.entities.posts).reverse();
    return ({
        posts
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