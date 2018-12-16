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

    renderErrors(errors) {
        return this.props.errors.map(e => {
            return <li>{e}</li>;
        })
    }


    render() {
        return (
            <div className="outer-div">
                <div className="parent-image">
                    <img id="iphone" src="/assets/iphonex.png" />
                    <img id="paris" src="/assets/paris.gif" />
                    <img id="temp" src="/assets/iphonetemp.png" />
                </div>
            <div className="session-form">
                <form>
                    <h2 id='logo'>Instapx</h2>
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