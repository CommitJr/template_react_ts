import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../features/login';
import App from './index';

const Router = () => {
    return (
        <Switch>
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />

            <Redirect from="/" to="/app" />
        </Switch>
    );

}

export default Router;
