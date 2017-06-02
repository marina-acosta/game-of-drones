import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { players } from './players'

const rootReducer = combineReducers({
    routing,
    players
})

export default rootReducer