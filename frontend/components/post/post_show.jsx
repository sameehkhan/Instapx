import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';


class PostShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchPost(this.props.postId);
    }

    postComments(post) {
        // debugger
        if (post.comments) {
            return (
                post.comments.map(comment => {
                    // debugger
                    return (
                        <div className='feed-comment-list'>
                            <ul key={comment.id}>
                                <li key={comment.id}>
                                    <Link to={`/users/${comment.user_id}`}><span className='post-username2'>{comment.username} </span></Link>
                                    <span className='post-caption-feed'>{comment.body}</span>
                                </li>
                            </ul>
                        </div>
                    )

                })
            )
        } else {
            return (
                <div></div>
            )
        }
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
                                        <div className='post-username-show'>
                                            <div>{this.props.post.username}</div>
                                        </div>
                                    </div>
                                    <div className='post-show-comments'>
                                       
                                        <div className='feed-comment-list'>
                                            <ul key={this.props.post.id}>
                                                <li key={this.props.post.id}>
                                                    <Link to={`/users/${this.props.post.user_id}`}><span className='post-username2'>{this.props.post.username} </span></Link>
                                                    <span className='post-caption-feed'>{this.props.post.caption}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='post-comments-container2'>
                                            <div className='post-comments-list2'>{this.postComments(this.props.post)}</div>
                                            <CommentContainer postId={this.props.post.id} />
                                        </div>
                                    </div>

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