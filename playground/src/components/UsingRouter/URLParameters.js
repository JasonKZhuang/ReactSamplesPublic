import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function URLParameters() {
    return (
        <Router>
            <div>
                <h2>Using Parameters Example - Accounts</h2>

                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                    <li>
                        <Link to="/modus-create">Modus Create</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<Child />} />
                </Switch>
            </div>
        </Router>
    );
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    let match = useRouteMatch();

    return (
        <div>
            <h3>Path: {match.path}</h3>
            <h3>ID: {id}</h3>
        </div>
    );
}

export default URLParameters
