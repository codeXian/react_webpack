import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import * as store from './store'
import App from '@shared/App'

configure({ enforceActions: 'observed' })

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
