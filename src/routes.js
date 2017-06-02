import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import PlayersSelection from './containers/PlayersSelection'

export default
<Route path="/" name="App" component={App}>
    <IndexRoute component={PlayersSelection}/>
</Route>