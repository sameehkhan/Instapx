import React from 'react';
import { Link } from 'react-router-dom';

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
                    <button onClick={this.handleLogout}>Log Out</button>
                    <img className="ig-logo" src='/assets/ig-logo.png'/>
                    <div className='nav-logo'><h2 id='logo-words'>Instapx</h2></div>
                    <div className='search-bar'><input className='search-input'type="text" placeholder="Search"/></div>
                    <Link to={`/user`} id='login-button'>Sign up</Link>
            </div>
        );
    }

}

export default NavBar;