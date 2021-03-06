import { SET_GAME_CONFIGURATION } from '../actions/gameConfiguration'

export function configuration(state={
    moves: []
},action) {
    switch (action.type) {
        case SET_GAME_CONFIGURATION:
            return Object.assign({}, state, {
                moves: action.moves
            });
        default:
            return state;
    }
}
