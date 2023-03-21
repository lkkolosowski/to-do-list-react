import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { Navbar, NavbarItem, StyledNavLink } from "./styled";

function App() {
  return (
    <HashRouter>
      <nav>
        <Navbar>
          <NavbarItem>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </NavbarItem>
          <NavbarItem>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
          </NavbarItem>
        </Navbar>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania">
            <TasksPage />
          </Route>
          <Route path="/autor">
            <AuthorPage />
          </Route>
          <Route path="/">
            <Redirect to="/zadania" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  );
}

export default App;
