import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'
import dex from './reducers'

import Home from './components/Home';
import WalletLoader from './containers/WalletLoader';

import './index.css';
import 'semantic-ui-css/semantic.css';

import './cc';

const history = createHistory()

let store = createStore(
    dex,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    )
)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/wallet" component={WalletLoader}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
