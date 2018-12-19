import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)

    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
}

// componentDidUpdate() {  for different user show pages
//     this.props.fetchUser(this.props.match.params.id);
// }

    render() {
        if(this.props.user === undefined){
            return (
                <div></div>
            )
        }
         
        return (
            <div className='profile-div'>

            <div className='info-container'>
                    <div className='info-section'>
                        <div className='div-1'> <h1>{this.props.user.username}</h1></div>

                        <ul className='div-2'> 
                            
                        </ul>
                        <div className='div-3'> {this.props.user.full_name}</div>
                    </div>
                    <div className='image-section'></div>
            </div>

                <div className='posts-container'>
                    <div className='all-posts'>
                    {this.props.posts.reverse().map( post => {
                        return (
                            <div className='post' tabIndex="0">
                            <img className='post-image' src={post.photo} />
                            <div className='post-info'></div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                {/* <UserPostsIndexContainer userId={userProf.id} /> */}
            </div>
        );
    }
};

export default UserShow;