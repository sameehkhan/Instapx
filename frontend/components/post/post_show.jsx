import React from 'react';
import { Link } from 'react-router-dom';


class PostShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchPost(this.props.postId);
    }

    render() {
        if (this.props.post === undefined) {
            return (
                <div></div>
            )
        }
        return (
            <div className='post-modal-container'>
                <div className='post-show-image-container'>
                    <div><img className='post-show-image' src={this.props.post.photo} /></div>
                    <div className='post-show-comments'></div>
                </div>
            </div>
        );
    }
};

export default PostShow;