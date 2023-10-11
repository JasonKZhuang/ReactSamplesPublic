import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//The basic principle is that
//There are some links with href, when you click a link
//The Router is listening what link you clicked, and There is a RouterTable List you setted
//The Router match the clicked link to the RouterTable path
//The Route redirects link to the component within the Route
function BasicRouting() {
  return (
    <Router>
      <div>
        <h2>The Basic Routing Example</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default BasicRouting;
