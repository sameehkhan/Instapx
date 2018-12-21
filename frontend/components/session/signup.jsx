import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            full_name: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }


    componentDidMount(){
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

    renderErrors(errors){
        return this.props.errors.map( e=>{
            return <li>{e}</li>;
        })
    }




    render() {
        return (
            <div className="outer-div">
                <div className="parent-image">
                <img id="temp" src={window.temp} />
                <img id="paris" src={window.paris} />
                <img id="temp" src={window.temp} />
                </div>
                <div className="session-form">
                <form>
                        <img className="instapx-logo" src={window.instapx} />
                        <h2 className="form-header">Sign up to see photos and videos from your friends.</h2>
                    <input
                            type="text"
                            value={this.state.username}
                            onChange={this.input('username')}
                            placeholder='Username'
                        />
                    <input
                            type="text"
                            value={this.state.fullName}
                            onChange={this.input('full_name')}
                            placeholder='Full Name'
                        />
                    <input
                            type="password"
                            value={this.state.password}
                            onChange={this.input('password')}
                            placeholder='Password'
                        />
                    <div className='form-box'>
                    <button onClick={this.handleSubmit} id='session-button'>Sign Up</button>
                    </div>
                        <div className='errors'>{this.renderErrors()}</div>
                </form>
                    <div className='sep-form-box'>
                        Have an account? <Link to={`/login`} >Log in</Link>
                    </div>
            </div>
            </div>
        );
    }
};

export default SignupForm;