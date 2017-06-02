import { players } from '../players'
import * as types from '../../actions/players'

describe('set players reducer', () => {
    it('should return the initial state', () => {
        expect(
            players(undefined, {})
        ).toEqual({
                players: []
        })
    })

    it('should handle SET_PLAYERS', () => {
        expect(
            players([], {
                type: types.SET_PLAYERS,
                players: ['Alice', 'Bernard']
            })
        ).toEqual({
            players: ['Alice', 'Bernard']
        })

        expect(
            players(
                {
                    players: ['Alice','Bernard']
                },
                {
                    type: types.SET_PLAYERS,
                    players: ['Chris','Dory']
                }
            )
        ).toEqual({
            players: ['Chris', 'Dory']
        })
    })
})
