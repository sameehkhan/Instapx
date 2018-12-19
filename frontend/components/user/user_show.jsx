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
            <div>
                <div> {this.props.user.username}</div>
                <div> {this.props.user.full_name}</div>

                <div className='all-posts'>

                {this.props.posts.reverse().map( post => {
                    return (
                        <div className='post'>
                        <img className='user-image' src={post.photo} />
                        </div>
                    )
                })}
                </div>
                {/* <UserPostsIndexContainer userId={userProf.id} /> */}
            </div>
        );
    }
};

export default UserShow;