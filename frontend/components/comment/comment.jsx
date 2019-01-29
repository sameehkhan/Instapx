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
                <div>COMMENT</div>
            )
        }
        return (
            <div>
                {/* {this.props.comments.reverse().map(comment => {
                    return (
                        <div key={comment.id} className='feed-post-comment' tabIndex="0">
                            <div>{comment.body}</div>
                        </div>
                    )
                })} */}

                {/* COMMENT */}
            </div>
        );
    }
};

export default Comment;