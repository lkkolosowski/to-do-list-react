import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toAuthor, toProducts } from "./routes";
import AuthorPage from "./features/author/AuthorPage";
import ProductsPage from "./features/products/ProductsPage";
import Navigation from "./common/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toProducts()}>
          <ProductsPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to={toProducts()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
