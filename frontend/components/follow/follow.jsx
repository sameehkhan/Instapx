import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.currentUser == undefined) {
            return (
                <div>
                </div>
            )
        }
        if (this.props.currentUser.following_ids.includes(parseInt(ownProps.match.params.id))){
            return (
                <div>
                    <button className='user-button'>Unfollow</button>
                </div>
            )
        }else{
            return (
            
            <div>
                <button className='user-button'>Unfollow</button>
            </div>
            )
        }
    }
};

export default Like;