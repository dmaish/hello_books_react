
// Creating private/protected routes
// This protects the endpoints which need authentication
 
import React from "react";
import { Route, Redirect } from "react-router-dom";

// using the private route constant
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("access_token")
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  )

export default PrivateRoute;
