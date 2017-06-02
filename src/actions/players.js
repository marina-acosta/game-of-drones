export const SET_PLAYERS = 'SET_PLAYERS'
export const RESET_PLAYERS = 'RESET_PLAYERS'

export function setPlayersAction(one, two) {
    return {
        type: SET_PLAYERS,
        players: [one, two]
    }
}

export function setPlayers(one, two){
    return dispatch => {
        dispatch(setPlayersAction(one, two))
    }
}

export function resetPlayers() {
    return dispatch => {
        dispatch({
            type: RESET_PLAYERS
        })
    }
}