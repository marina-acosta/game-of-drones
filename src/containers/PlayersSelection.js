import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import PlayersSelectorComponent from '../components/PlayersSelector'
import { setPlayers } from '../actions/players'

class PlayersSelection extends Component {

    render() {
        return (
            <PlayersSelectorComponent onSubmit={(e) => this.handleSubmit(e)}/>
        )
    }

    handleSubmit(event) {
        this.props.setPlayers(event.one, event.two);
        browserHistory.push('/game')
    }
}

export default connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            setPlayers: function (one, two) {
                dispatch(setPlayers(one, two))
            }
        }
    }
)(PlayersSelection);
