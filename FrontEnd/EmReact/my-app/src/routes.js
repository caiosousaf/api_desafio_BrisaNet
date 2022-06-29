import React from "react";

import { isAuthenticated } from "./auth"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
            
        }
    ></Route>
)