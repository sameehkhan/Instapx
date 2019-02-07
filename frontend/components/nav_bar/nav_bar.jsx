import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return( 
        <div className="big-nav">
            <div className="main-nav">
                    
                    <div className='all-nav-logos'>
                    <Link to={`/feed`}>
                        <img className="nav-bar-logo" src={window.instapxlogo} />
                    </Link>

                    <img className="nav-bar-line" src={window.logoline} />
                    
                    <Link to={`/feed`}>
                        <img className="nav-bar-word" src={window.instapx}/>
                    </Link>
                    </div>
                    <SearchContainer />
                    <div className='user-icon'><Link to={`/users/${this.props.currentUserId}`}><img className="prof-icon" src={window.icon} /></Link></div>
            </div>
        </div>
        );
    }

}

export default NavBar;