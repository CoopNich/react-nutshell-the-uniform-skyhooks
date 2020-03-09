import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import NewsList from "./articles/NewsList";
import NewsForm from "./articles/NewsForm";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import TaskEditForm from "../components/tasks/TaskEditForm";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";

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
        path="/news"
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




    </React.Fragment>
  );
};

export default ApplicationViews;
