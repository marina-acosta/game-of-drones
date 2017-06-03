import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameConfigurationComponent from '../components/GameConfiguration'
import { configureGame } from '../actions/gameConfiguration'

class ConfigureGame extends Component {

    render() {
        return (
            <GameConfigurationComponent onSubmit={(e) => this.handleSubmit(e)}
                                        configuration={this.props.existingConfiguration} />
        )
    }

    handleSubmit(event) {
        this.props.configureGame(event.configuration);
    }
}

export default connect(
    (state) => {
        return {
            existingConfiguration: state.configuration.moves
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
