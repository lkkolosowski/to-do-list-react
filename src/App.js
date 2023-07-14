import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toAuthor, toTask, toTasks } from "./routes";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TasksPage/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import Navigation from "./common/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
