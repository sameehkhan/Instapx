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
                    {/* <img className="ig-logo" src='/assets/ig-logo.png'/> */}
                    <img className="nav-bar-word" src='/assets/instapxlogo.png' />
                    <img className="nav-bar-line" src='/assets/logo-line.png' />
                    <img className="nav-bar-logo" src='/assets/instapx.png'/>
                    <div className='search-bar'><input className='search-input'type="text" placeholder="Search"/></div>
                    <Link to={`/user`} id='login-button'>Sign up</Link>
            </div>
        );
    }

}

export default NavBar;