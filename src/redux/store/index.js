import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import AssignmentReducer from '../reducer'
import { routerMiddleware, push, browserHistory } from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import routerHistoryMiddleware from '../navigation/routerMiddleware';

export const history = createHistory()

const middleware = [
    thunk,
    routerHistoryMiddleware(history),
    routerMiddleware(history)
]

const store = createStore(
    AssignmentReducer,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store;
