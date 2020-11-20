import React, { Component, Fragment, Suspense } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import LoadingPage from "../Views/LoadingPage";

// import { Provider } from "mobx-react";
// import stores from "../Stores";

import routes from "./Routes";
import NotFound from "../Views/NotFound";

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  exact={!!route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Fragment>
      </HashRouter>
    );
  }
}
