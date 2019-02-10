import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }


    componentDidMount() {
        this.props.clear();
    }

    input(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/feed'));
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.action({ username: 'demo', password: 'password' }).then(() => this.props.history.push('/feed'));
    }


    // renderErrors() {

    //     return this.props.errors.map(e => {
    //         return <li>{e}</li>;
    //     })
    // }
    
    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="submit-errors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="outer-div">
                <div className="parent-image">
                    <img id="iphone" src={window.iphone} />
                    <img id="paris" src={window.paris} />
                    <img id="temp" src={window.temp} />
                </div>
            <div className="session-form">
                <form>
                        <img className="instapx-logo" src={window.instapx} />
                        <h2 className="form-header">Log in to see photos and videos from your friends.</h2>
                    <input
                            type="text"
                            value={this.state.username}
                            placeholder='Username'
                            onChange={this.input('username')}
                        />
                    <input
                            type="password"
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.input('password')}
                        />
                    <div className='form-box'>
                        <button onClick={this.handleSubmit} >Log in</button>
                    </div>
                        <div className='form-box'>
                            <button onClick={this.handleDemo} >Demo Login</button>
                        </div>
                        <div className='errors'>{this.renderErrors()}</div>
                </form>
                    <div className='sep-form-box'>
                        Don't have an account? <Link to={`/`} id='login-button'>Sign up</Link>
                    </div>
            </div>
            </div>
        );
    }
};

export default LoginForm;