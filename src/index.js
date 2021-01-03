import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import Documents from "views/Documents/Documents.js"
import CV from "views/Documents/CV.js"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/Portfolio">
            <Components />
        </Route>

        <Route path="/Docs">
            <Documents />
        </Route>

        <Route path="/CV">
            <CV />
        </Route>

    </Switch>
  </Router>,
  document.getElementById("root")
);
