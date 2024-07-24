import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const {
      adminauthData: { isAuthenticated },
  } = useSelector((state) => {
      console.log(state.login);
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
                    pathname: "/adminlogin",
                    state: lastRouteVisited,
                }}
            />
        );
      }}
    />
  );
}

export default ProtectedRoute;
