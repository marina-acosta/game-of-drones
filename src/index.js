import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import rootReducer from './reducers/index'
import routes from './routes'
import thunk from 'redux-thunk'



require('./styles/index.scss')

//init store
let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

// init ranking in local storage if didn't exists
if (! localStorage.getItem('ranking')) {
    localStorage.setItem('ranking', JSON.stringify([]));
}

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
