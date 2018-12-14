import React from 'react';
import { Link } from 'react-router-dom';

class UserIndex extends React.Component {
    constructor(props){
        super(props)
        
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/login'));
    }


    render() {
        return (
            <div>
                <div className='form-box'>
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>
            </div>
        );
    }
};

export default UserIndex;