import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Auth from "./utils/Auth";

import AdminLayout from "layouts/Admin";
import HomeLayout from "layouts/Home";
import SignInLayout from "layouts/SignIn";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin">
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        </PrivateRoute>
        <Route path="/home" render={(props) => <HomeLayout {...props} />} />
        <Route path="/login" render={(props) => <SignInLayout {...props} />} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
