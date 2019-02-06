import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.currId);
    }

    render() {
        if (this.props.currentUser == undefined || this.props.currentUser.following_ids == undefined) {
            return (
                <div>
                </div>
            )
        }
        if (this.props.currentUser.following_ids.includes(this.props.followingId)){
            return (
                <div>
                    <button className='user-button'>Unfollow</button>
                </div>
            )
        }else{
            debugger
            return (
            
            <div>
                <button className='user-button'>Follow</button>
            </div>
            )
        }
    }
};

export default Like;