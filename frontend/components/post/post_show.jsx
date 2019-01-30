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
            <div className='big-wrapper'>
                <div className='close-button-wrp'>
                    <button className='close-button' onClick={this.closeModal}>×</button>
                </div>
                <div>
                    <div className='post-modal-container'>                    
                        <div className='post-show-image-container'>
                            <div><img className='post-show-image' src={this.props.post.photo} /></div>
                            <div className='post-show-comments'></div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
};

export default PostShow;