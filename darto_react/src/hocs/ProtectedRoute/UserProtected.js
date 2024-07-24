import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

function UserProtected({ component: Component, ...rest }) {
  const {
    authData: { isAuthenticated },
  } = useSelector((state) => {
    console.log(state);
    return state.login;
  });
  const { pathname: lastRouteVisited } = useLocation();

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: lastRouteVisited,
            }}
          />
        );
      }}
    />
  );
}

export default UserProtected;
