import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/login'));
    }

    render() {
        return( 
            <div className="main-nav">
                <div className='form-box'>
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>
            </div>
        );
    }

}

export default NavBar;