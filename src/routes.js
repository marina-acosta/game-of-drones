import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import PlayersSelection from './containers/PlayersSelection'
import PlayGame from './containers/PlayGame'
import Ranking from './components/Ranking'
import ConfigureGame from './containers/ConfigureGame'

export default
<Route path="/" name="App" component={App}>
    <IndexRoute component={PlayersSelection}/>
    <Route path="game" component={PlayGame}/>
    <Route path="ranking" component={Ranking} />
    <Route path="configuration" component={ConfigureGame}/>
</Route>