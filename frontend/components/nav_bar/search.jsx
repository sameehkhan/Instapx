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
                        return(
                            <li key={user.id}>
                                {user.username}
                            </li>
                        )
                    })}
                </ul>
            </div>

        );
    }

}

export default Search;