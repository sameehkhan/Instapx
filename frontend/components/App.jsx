import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FeedContainer from './feed/feed_container';
import UserShowContainer from './user/user_show_container';
// import PhotoForm from './user/photo_form';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';



const App = () => (
    <div className='big-div'>

            <ProtectedRoute path='/' component={NavBarContainer}/>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/" component={SignUpFormContainer}/>
                <ProtectedRoute path='/feed' component={FeedContainer} />
                <ProtectedRoute path='/users/:id' component={UserShowContainer}/>
                {/* <Route path='/upload' component={PhotoForm}/> */}
            </Switch>
            
    </div>
);

export default App;