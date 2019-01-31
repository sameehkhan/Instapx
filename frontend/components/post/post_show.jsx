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
                    <button onClick={this.props.history.goBack} className='close-button'>×</button>
                   
                </div>
                <div>
                    <div className='post-modal-container'>                    
                        <div className='post-show-image-container'>
                            <div><img className='post-show-image' src={this.props.post.photo} /></div>
                            <div className='post-show-comments-container'>
                                <div className='post-show-comments-wrp'>

                                    <div className='post-show-header'>
                                        <div>
                                            <img className='post-show-prof' src={this.props.post.user_photo} />
                                        </div>
                                        <div>
                                            {this.props.post.username}
                                        </div>
                                    </div>
                                    <div className='post-show-comments'>Whats up</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
};

export default PostShow;