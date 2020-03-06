import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import NewsList from "./articles/NewsList"

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route
        exact
        path="/ "
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact path="/news"
        render={props => {
          if (hasUser) {
            return <NewsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route
        render={props => {
          if (isAuthenticated()) {
            return <EventsList
              {...props} />
          } else {
            return <Redirect to="/Login" />
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;