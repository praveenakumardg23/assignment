import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import Login from './screens/login'
import Dashboard from './screens/dashboard';
import {ConnectedRouter} from 'react-router-redux'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
