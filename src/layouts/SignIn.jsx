import React from "react";

import { useHistory, useLocation } from "react-router-dom";

import Auth from "../utils/Auth";

const SignIn = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/admin" } };
  let login = () => {
    Auth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default SignIn;
