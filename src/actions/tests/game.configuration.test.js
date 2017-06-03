import * as actions from '../gameConfiguration'
import * as types from '../gameConfiguration'

describe('actions', () => {
    it('should set default configuration', () => {
        const expectedAction = {
            type: types.SET_GAME_CONFIGURATION,
            moves: [
                { move: "paper", kills: "rock"},
                { move: "rock", kills: "scissors"},
                { move: "scissors", kills: "paper"}
            ]
        }
        expect(actions.getInitialConfiguration()).toEqual(expectedAction)
    })
})