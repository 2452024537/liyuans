import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/views.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/abc/def" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
