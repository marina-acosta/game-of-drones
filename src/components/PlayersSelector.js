import React, { Component } from 'react'

require('../styles/_players-selector.scss')

export default class PlayersSelectorComponent extends Component {

    constructor() {
        super();
        this.state = {
            playerOneClassName: '',
            playerTwoClassName: '',
        }
    }

    render(){
        return (
            <div className="players-selector-container">
                <div className="title">
                    {"Enter Player's Names"}
                </div>
                <div className="player-container">
                    <label>
                        {"Player 1"}
                    </label>
                    <input placeholder="Enter name" ref={playerOne => this.playerOne = playerOne}
                           className={this.state.playerOneClassName}/>
                </div>
                <div className="player-container">
                    <label>
                        {"Player 2"}
                    </label>
                    <input placeholder="Enter name" ref={playerTwo => this.playerTwo = playerTwo}
                           className={this.state.playerTwoClassName}/>
                </div>
                <input type="submit" value="Start" className="submit-button" onClick={(e) => this.handleSubmit(e)}/>
            </div>
        )
    }

    handleSubmit(e){
        e.preventDefault();
        let _playerOneClassName = '';
        let _playerTwoClassName = '';
        let ok = true;
        if (!this.playerOne.value){
            _playerOneClassName = 'input-error';
            ok = false;
        }
        if (!this.playerTwo.value){
            _playerTwoClassName = 'input-error';
            ok = false;
        }
        if (ok) {
            this.props.onSubmit({
                one: this.playerOne.value,
                two: this.playerTwo.value
            });
        } else {
            this.setState({
                playerOneClassName: _playerOneClassName,
                playerTwoClassName: _playerTwoClassName
            })
        }
    }
}

