import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Firebase, { FirebaseContext } from "./component/Firebase";
import Landing from "./page/Landing";
import NotFound from "./page/NotFound";
import Player from "./page/Player";
import GridPlayer from "./page/GridPlayer";
import Debug from "./page/Debug";
import Settings from "./page/Settings";

import "./styles/Global.css";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route path={"/play/:system"} component={Player} />
        <Route path={"/play2/:system"} component={GridPlayer} />=
        <Route path={"/debug/:system/:schedule?"} component={Debug} />
        <Route
          exact
          path={[
            "/set",
            "/set/:system",
            "/set/:system/details",
            "/set/:system/schedule/:schedule",
            "/set/:system/date/:date"
          ]}
          component={Settings}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
