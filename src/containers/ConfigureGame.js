import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import GameConfigurationComponent from '../components/GameConfiguration'
import { configureGame } from '../actions/gameConfiguration'

class ConfigureGame extends Component {

    render() {
        return (
            <GameConfigurationComponent onSubmit={(e) => this.handleSubmit(e)}
                                        configuration={this.props.moves} />
        )
    }

    handleSubmit(event) {
        this.props.configureGame(event.configuration);
        browserHistory.push("/");
    }
}

export default connect(
    (state) => {
        return {
            players: state.players.players,
            moves: state.configuration.moves // [{ move, kills }]
        }
    },
    (dispatch) => {
        return {
            configureGame: function (config) {
                dispatch(configureGame(config))
            }
        }
    }
)(ConfigureGame);
