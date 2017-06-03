export const SET_GAME_CONFIGURATION = 'SET_GAME_CONFIGURATION'

export function loadGameConfiguration(){
    return dispatch => {
        dispatch({
            type: SET_GAME_CONFIGURATION,
            moves: [
                { move: "paper", kills: "rock"},
                { move: "rock", kills: "scissors"},
                { move: "scissors", kills: "paper"}
            ]
        })
    }
}

export function configureGame(config) {
    return dispatch => {
        dispatch({
            type: SET_GAME_CONFIGURATION,
            moves: config
        })
    }
}