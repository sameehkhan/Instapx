import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import UserIndexContainer from './user/user_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FeedContainer from './feed/feed_container';
 import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
    <div className='big-div'>
            <ProtectedRoute path='/' component={NavBarContainer}/>
            <ProtectedRoute path='/feed' component={FeedContainer}/>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/" component={SignUpFormContainer}/>
                <ProtectedRoute exact path="/user" component={UserIndexContainer}/>
            </Switch>
    </div>
);

export default App;