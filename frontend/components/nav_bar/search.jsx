import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: '',
            users: []
        };
    
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    update(field) {
        console.log(this.state);
        return e => { 
            let filtered = this.props.users.filter(user => user.username.includes(e.target.value));
            if(e.target.value === ''){
                filtered = [];
            }
            this.setState({

            [field]: e.target.value,
            users: filtered
        });
        };
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                    className='search-input' 
                    type="text" 
                    onChange={this.update('search')} 
                    value={this.state.search} 
                    placeholder="Search" 
                />

                <ul>
                    {this.state.users.map( user => {
                        // debugger
                        return(
                            <Link key={user.id}to={`/users/${user.id}`}>
                            <li key={user.id}>
                                <div className='search-item'>
                                    <div className='search-photo'>
                                        <img src={user.photo}/>
                                    </div>
                                    <div className='search-info'>
                                        <div className='search-username'>{user.username}</div>
                                        <div className='search-fullname'>{user.full_name}</div>
                                    </div>
                                </div>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>

        );
    }

}

export default Search;