import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';

const App = () => (
  <Router>
    <Route path="/" component={BasicLayout} exact />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
