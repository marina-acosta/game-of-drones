export const SET_PLAYERS = 'SET_PLAYERS'

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
