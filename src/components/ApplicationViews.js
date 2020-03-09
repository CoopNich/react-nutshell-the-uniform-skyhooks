import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import MessageList from "./messages/MessageList";
import MessageDetail from "./messages/MessageDetail";
import MessageEditForm from "./messages/MessageEditForm.js";
import MessageForm from "./messages/MessageForm.js";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/ "
        render={props => {
          return <Home {...props} />;
        }}
      />
      <Route
        exact
        path="/messages"
        render={props => {
          if (isAuthenticated()) {
          return <MessageList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route exact path="/messages/:messageId(\d+)"
      render={props => {
        if (isAuthenticated()) {
        return (
          <MessageDetail
          messageId={parseInt(props.match.params.messageId)}
         {...props}
         />
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
      />
      <Route path="/messages/new"
      render={props => {
        return <MessageForm {...props} />;
      }}
      />
      <Route path="/messages/:messageId(\d+)/edit"
      render={props => {
        if(isAuthenticated()){
          return <MessageEditForm {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      
      }}
      />
   
    </React.Fragment>
  );
};

export default ApplicationViews;
