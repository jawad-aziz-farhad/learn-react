import React from 'react';
import { Switch , Route } from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import SignUp from '../pages/sign-up/sign-up';
import Dashboard from '../pages/dashboard/dashboard';

const Routes =  () => {
    return (
        <Switch>
            
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />

            <Route component={SignIn}/>

        </Switch>
    )
}

export default Routes;