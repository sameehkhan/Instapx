import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchComments(this.props.postId);
    }

    render() {
        if (this.props.comments === []) {
            return (
                <div></div>
            )
        }
        return (
            <div>
                
            </div>
        );
    }
};

export default Comment;