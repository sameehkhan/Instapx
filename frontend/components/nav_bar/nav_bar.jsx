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
                    <button onClick={this.handleLogout}>Log Out</button>
                    <img className="ig-logo" src='/assets/ig-logo.png'/>
                    <div className='nav-logo'>Instapx</div>
                    <div className='search-bar'><input type="text" placeholder="Search.."/></div>
            </div>
        );
    }

}

export default NavBar;