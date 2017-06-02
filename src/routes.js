import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import PlayersSelection from './containers/PlayersSelection'
import PlayGame from './containers/PlayGame'

export default
<Route path="/" name="App" component={App}>
    <IndexRoute component={PlayersSelection}/>
    <Route path="game" component={PlayGame}/>
</Route>