import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Register from "./register/Register"
import Home from "./home/Home";
import MessageList from "./messages/MessageList";
import MessageDetail from "./messages/MessageDetail";
import MessageEditForm from "./messages/MessageEditForm.js";
import MessageForm from "./messages/MessageForm.js";

//const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
import NewsList from "./articles/NewsList";
import NewsForm from "./articles/NewsForm";
import NewsDetail from "./articles/NewsDetail";
import NewsEditForm from "./articles/NewsEditForm";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import TaskEditForm from "../components/tasks/TaskEditForm";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
           <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/tasks"
        render={props => {
          if (hasUser) {
            return <TaskList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        path="/tasks/new"
        render={props => {
          if (hasUser) {
            return <TaskForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        exact
        path="/tasks/:taskId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <TaskEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/messages"
        render={props => {
          if (hasUser) {
          return <MessageList {...props} />;
         } else {
           return <Redirect to="/login" />;
        }
        }}
      />
      <Route exact path="/messages/:messageId(\d+)"
      render={props => {
        if (hasUser){
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
       if(hasUser){
          return <MessageEditForm {...props} />;
        } else {
           return <Redirect to="/login" />;
        }
      
      }}
      />
   
       <Route path="/news"
        render={props => {
          if (hasUser) {
            return <NewsList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/news/new"
        render={props => {
          if (hasUser) {
            return <NewsForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />




      <Route
        exact
        path="/events"
        render={props => {
          if (hasUser) {
            return <EventList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/events/new"
        render={(props) => {
          if (hasUser) {
            return <EventForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <EventEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />




      <Route exact path="/news/:articleId(\d+)"
        render={props => {
          if (hasUser) {
            return <NewsDetail articleId={parseInt(props.match.params.articleId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route path="/news/:articleId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <NewsEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;
