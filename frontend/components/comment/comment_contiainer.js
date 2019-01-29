import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import React from 'react';
import Comment from './comment';

const mapStateToProps = (state, ownProps) => {
    let comments = [];

    return ({
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        comments: comments
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        fetchComments: postId => dispatch(deleteComment(postId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);