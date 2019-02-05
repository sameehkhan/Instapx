import React from 'react';
import CommentContainer from '../comment/comment_container';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        // this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts();
        window.scrollTo(0, 0)

    }

    componentDidUpdate() {

    }

    postComments(post){
        // debugger
        if(post.comments){
            return (
                post.comments.map(comment => {
                    // debugger
                    return (
                        <div key={comment.id}className='feed-comment-list'>
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
        }else{
            return (
                <div></div>
            )
        }
    }

    
    render() {
        if (this.props.posts === undefined){
            return(
                <div></div>
            )
        }
        return (
            <div>
                <div className='feed-container'>
                <div className='feed-index'>
                {this.props.posts.reverse().map(post => {
                    // debugger
                    return (
                        <div key={post.id} className='feed-post' tabIndex="0">
                            <div className='post-bar'>
                                <div className='canvas'><Link to={`/users/${post.user_id}`}><img className='post-prof-pic' src={post.user_photo} /> </Link></div>
                                <div><h2 className='post-username'><Link to={`/users/${post.user_id}`}>{post.username}</Link></h2></div> 
                                
                            </div>

                            <img className='post-index-img' src={post.photo_url} />
                            <div className='comment-bar'>
                                <div className='post-like-container'></div>

                                <div className='post-caption-container'>
                                    <Link to={`/users/${post.user_id}`}><h2 className='post-username2'>{post.username} </h2></Link>
                                    <span className='post-caption-feed'>{post.caption}</span>
                                </div>

                                <div className='post-comments-container'>
                                    <div className='post-comments-list'>{this.postComments(post)}</div>
                                    <CommentContainer postId={post.id}/>
                                </div>
                                <div></div>

                            </div>
                            {/* // <div className='post-info'></div> */}
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
        );
    }
}

export default Feed; 