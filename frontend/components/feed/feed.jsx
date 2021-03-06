import React from 'react';
import CommentContainer from '../comment/comment_container';
import LikeContainer from '../like/like_container';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     loading: false,
        //     offset: 0,
        //     postId: 0
        // }

        // window.addEventListener('scroll', () => {
        //     const { innerHeight } = window;
        //     const { scrollTop, offsetHeight } = document.documentElement;

        //     if (innerHeight + scrollTop > offsetHeight - 1) {
        //         this.setState(state => ({
        //             offset: state.offset + 5
        //         }));
        //         this.props.fetchPosts(this.state.offset);
        //     }
        // });


    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchUser(this.props.userId);
        window.scrollTo(0, 0);
        // this.setState({ loading: true });
        // this.props.fetchPosts(this.state.offset)
        //     .then(() => this.setState({ loading: false }))
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
        if (this.props.posts == undefined || this.props.currentUser.following_ids == undefined){
            return(
                <div></div>
            )
        }
        return (
            <div>
                <div className='feed-container'>
                <div className='feed-index'>
                {this.props.posts.map(post => {
                    const likers = post.liker_ids ? post.liker_ids : '';
                    return (
                        <div key={post.id} className='feed-post' tabIndex="0">
                            <div className='post-bar'>
                                <div className='canvas'><Link to={`/users/${post.user_id}`}><img className='post-prof-pic' src={post.user_photo} /> </Link></div>
                                <div><h2 className='post-username'><Link to={`/users/${post.user_id}`}>{post.username}</Link></h2></div> 
                                
                            </div>

                            <img className='post-index-img' src={post.photo_url} />
                            <div className='comment-bar'>
                                <div className='post-like-container'>
                                    <LikeContainer likes={likers} postId={post.id} />
                                    <div className='post-show-likes'>{likers.length} likes</div>
                                </div>

                                <div className='post-caption-container'>
                                    <Link to={`/users/${post.user_id}`}><h2 className='post-username2'>{post.username} </h2></Link>
                                    <span className='post-caption-feed'>{post.caption}</span>
                                </div>

                                <div className='post-comments-container'>
                                    <div className='post-comments-list'>{this.postComments(post)}</div>
                                    <div className='post-feed-time'>{post.created_at}</div>
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