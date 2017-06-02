export const LOAD_GAME_CONFIGURATION = 'LOAD_GAME_CONFIGURATION'

export function loadGameConfiguration(){
    return dispatch => {
        dispatch({
            type: LOAD_GAME_CONFIGURATION,
            moves: [
                { move: "paper", kills: "rock"},
                { move: "rock", kills: "scissors"},
                { move: "scissors", kills: "paper"}
            ]
        })
    }
}
