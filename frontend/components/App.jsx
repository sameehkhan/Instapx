import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FeedContainer from './feed/feed_container';
import UserShowContainer from './user/user_show_container';
import PostShowContainer from './post/post_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';



const App = () => (
    <div className='big-div'>

            <ProtectedRoute path='/' component={NavBarContainer}/>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/" component={SignUpFormContainer}/>
                <ProtectedRoute exact path='/feed' component={FeedContainer} />
                <ProtectedRoute path='/users/:id' component={UserShowContainer}/>
                <ProtectedRoute exact path='/:post_id' component={PostShowContainer}/>
                {/* <ProtectedRoute path='/upload' component={PostFormContainer}/> */}
            </Switch>
            
    </div>
);

export default App;