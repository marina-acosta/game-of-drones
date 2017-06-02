import * as actions from '../players'
import * as types from '../players'

describe('actions', () => {
    it('should set players names', () => {
        const one = 'Alice'
        const two = 'Bernard'
        const expectedAction = {
            type: types.SET_PLAYERS,
            players: [one, two]
        }
        expect(actions.setPlayersAction(one, two)).toEqual(expectedAction)
    })
})