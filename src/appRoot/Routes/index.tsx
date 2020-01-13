import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import publicRoutes from "./public";
import privateRoutes from "./private";
import Loading from "../../components/Loading";

const Routes: React.FC = () => {
  return (
    <Suspense fallback={Loading}>
      <Switch>
        {/* <Redirect from="/" to="/login" exact /> */}
        {publicRoutes.map(route => (
          <Route
            component={route.component}
            key={route.id}
            path={route.path}
            exact={route.exact}
          />
        ))}
        {/* <Redirect from="/" to="/timeline" exact /> */}
        {privateRoutes.map(route => (
          <Route
            component={route.component}
            key={route.id}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
