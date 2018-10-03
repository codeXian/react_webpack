import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from './loadable/BasicLayout';
import BlockLayout from './loadable/BlockLayout';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={BasicLayout} exact />
      <Route path="/block" component={BlockLayout} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
