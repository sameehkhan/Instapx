import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)

    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
}

    render() {
        if(this.props.user === undefined){
            return (
                <div></div>
            )
        }
         
        return (
            <div>
                <div>Hello {this.props.user.username}</div>

                {/* <UserPostsIndexContainer userId={userProf.id} /> */}
            </div>
        );
    }
};

export default UserShow;