/*
This example shows how nested routing works. 
The route /topics loads the Topics component, which renders any further <Route>'s conditionally on the paths :id value.
*/
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function NestedRouting() {
  return (
    <Router>
      <div>
        <h2>Nested Routing Example - Accounts</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics (This is a Nested Routing)</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/childPath1`}>Child Topic 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/childPath2`}>Child Topic 2</Link>
        </li>
      </ul>

      {/* 
        The Topics page has its own <Switch> with more routes that build on the /topics URL path. 
        You can think of the 2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected 
     */}

      {/* 
        ${match.path} is the path 'topics' from the Link above
        :topicId is the argument such as 'childPath1' or 'childPath2'
        the `` is used to identify the variables
      */}
      <Switch>
        {/* there is no child parameters after the path /topics */}
        <Route exact={true} path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>

        {/* there is a child parameter after the path /topics */}
        <Route path={`${match.path}/:topicId`}>
          <div>match.path : {match.path}</div>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default NestedRouting;
