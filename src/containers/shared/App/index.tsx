import * as React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>
}

const Home = Loadable({
  loader: () => import(/*webpackChunkName: "home"*/ '@views/Home'),
  loading: Loading,
})

const Page = Loadable({
  loader: () => import(/*webpackChunkName: "page"*/ '@views/Page'),
  loading: Loading,
})

@hot(module)
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
