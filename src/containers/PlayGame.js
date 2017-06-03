import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import PlayRound from '../components/PlayRound'
import RoundsLog from '../components/RoundsLog'
import ShowWinner from '../components/ShowWinner'


class PlayGame extends Component {

    constructor() {
        super();
        this.state = {
            round: 1,
            log: [],
            wins: [0, 0]
        }
    }

    render() {

        let _view = <div>
                        <PlayRound round={this.state.round} players={this.props.players} moves={this.props.moves}
                                   submitRound={(e) => this.handleSubmitRound(e)} />
                        <RoundsLog log={this.state.log} players={this.props.players} total={this.state.wins}/>
                    </div>

        if (this.state.wins[0] >= 3) {
            _view = <ShowWinner winner={this.props.players[0]} onPlayAgain={() => this.handlePlayAgain()}/>
        } else if (this.state.wins[1] >= 3) {
            _view = <ShowWinner winner={this.props.players[1]} onPlayAgain={() => this.handlePlayAgain()}/>
        }

        return (
            <div>
                {_view}
            </div>
        )
    }

    componentWillMount() {
        if (!this.props.players || this.props.players.length < 2 ) {
            browserHistory.push('/')
        }
    }

    handlePlayAgain(){
        browserHistory.push('/')
    }

    // Given a play => returns -1 is nobody wins, 0 if player one wins, 1 if player two wins
    calculateWinner(play) {
        let _result = -1;
        let _oneWinsObject = JSON.stringify({
            "move": play[0],
            "kills": play[1]
        });
        let _twoWinsObject = JSON.stringify({
            "move": play[1],
            "kills": play[0]
        });
        this.props.moves.map((rule) => {
            if (JSON.stringify(rule) === _oneWinsObject) {
                _result = 0;
            } else if (JSON.stringify(rule) === _twoWinsObject) {
                _result = 1;
            }
        });
        return _result
    }

    handleSubmitRound(e) {
        let _winner = this.calculateWinner(e.play);
        let _wins = this.state.wins;
        if ( _winner !== -1) {
            // if there is a winner in the round => increase winner's count
            _wins[_winner]++;
            // If is the third victory => store it !
            if (_wins[_winner] === 3) {
                let ranking = JSON.parse(localStorage.getItem('ranking'));
                let stop = false;
                for (var i = 0; i < ranking.length && !stop; i++){

                    if (ranking[i].name === this.props.players[_winner]) {
                        ranking[i].count ++;
                        stop = true;
                    }
                }
                if (!stop) {
                    ranking.push({ name: this.props.players[_winner], count: 1 });
                }
                localStorage.setItem('ranking', JSON.stringify(ranking));
            }
        }
        // Add winner to log, sum one to winner's count and increase round
        let _log = this.state.log;
        _log.push({
            round: this.state.round,
            winner: _winner !== -1 ? this.props.players[_winner]: "--"
        });
        this.setState({
            log: _log,
            round: this.state.round + 1,
            wins: _wins
        });
    }
}

export default connect(
    (state) => {
        return {
            players: state.players.players,
            moves: state.configuration.moves // [{ move, kills }]
        }
    }
)(PlayGame);
