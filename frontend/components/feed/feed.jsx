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
        debugger
        return (
            <div>
                <div className='feed-container'>
                <div className='feed-index'>
                {this.props.posts.reverse().map(post => {
                    return (
                        <div className='feed-post' tabIndex="0">
                            <div className='post-bar'>
                                <div id='hey' className={this.props.users}>BIG BOY</div>
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