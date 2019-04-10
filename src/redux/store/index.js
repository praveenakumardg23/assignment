import { createStore, combineReducers, applyMiddleware  } from 'redux'
import AssignmentReducer from '../reducer'
import { routerMiddleware, push, browserHistory } from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const middleware = [
    thunk,
    routerMiddleware(history)
]

const store = createStore(
    AssignmentReducer,
    applyMiddleware(...middleware)
)

export default store;