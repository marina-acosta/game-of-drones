import { SET_PLAYERS, RESET_PLAYERS } from '../actions/players'

export function players(state={
    players: []
},action) {
    switch (action.type) {
        case SET_PLAYERS:
            return Object.assign({}, state, {
                players: action.players
            });
        case RESET_PLAYERS:
            return Object.assign({}, state, {
                players: []
            });
        default:
            return state;
    }
}
