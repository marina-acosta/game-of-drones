import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { players } from './players'
import { configuration } from './configuration'

const rootReducer = combineReducers({
    routing,
    players,
    configuration
})

export default rootReducer