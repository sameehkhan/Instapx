import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.currentUser == undefined || this.props.currentUser.following_ids == undefined) {
            return (
                <div>
                </div>
            )
        }
        if (this.props.following){
            return (
                <div>
                    <button className='user-button'>Unfollow</button>
                </div>
            )
        }else{
            return (
            
            <div>
                <button className='user-button'>Follow</button>
            </div>
            )
        }
    }
};

export default Like;