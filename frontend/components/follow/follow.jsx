import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);
        // this.state = Object.assign({}, this.props.comment);

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }

    render() {
        // debugger
        return (
            <div>
                <button className='user-button'>Follow/Unfollow</button>
                </div>

        )
    }
};

export default Like;