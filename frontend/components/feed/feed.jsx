import React from 'react';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        // this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchUsers();
    }
    render() {
        if (this.props.posts === undefined || this.props.users === undefined){
            return(
                <div></div>
            )
        }
        return (
            <div>
                <div className='feed-container'>
                <div className='feed-index'>
                {this.props.posts.reverse().map(post => {
                    return (
                        <div className='feed-post' tabIndex="0">
                            <div className='post-bar'>
                                <div className='canvas'><img className='post-prof-pic' src={this.props.users[post.user_id].photo} /> </div>
                                <div><h2 className='post-username'>{this.props.users[post.user_id].username}</h2></div> 
                            </div>
                            <img className='post-index-img' src={post.photo} />
                            <div className='comment-bar'></div>
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