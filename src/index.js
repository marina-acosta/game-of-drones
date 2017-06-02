import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import rootReducer from './reducers/index';
import routes from './routes'
import thunk from 'redux-thunk';



require('./styles/index.scss')

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
