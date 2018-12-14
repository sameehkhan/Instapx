import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import UserIndexContainer from './user/user_index_container';
 import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
    <div className='big-div'>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/" component={SignUpFormContainer}/>
                <ProtectedRoute exact path="/user" component={UserIndexContainer}/>
            </Switch>
    </div>
);

export default App;