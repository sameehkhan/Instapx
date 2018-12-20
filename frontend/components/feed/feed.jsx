import React from 'react';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        // this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                {this.props.posts.reverse().map(post => {
                    return (
                        <div className='post-index' tabIndex="0">
                            <img className='post-index-img' src={post.photo} />
                            {/* // <div className='post-info'></div> */}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Feed; 