import React, { Component } from 'react'

require('../styles/_configuration.scss')


export default class Ranking extends Component {

    constructor() {
        super();
        this.state = {
            nextConfig: []
        }
    }

    render() {

        let _moves = <div></div>;
        if (this.state.nextConfig.length > 0) {
            _moves = this.state.nextConfig.map((move, index) => {
                    return (
                        <div key={index} >
                            <input name={"move-"+index} value={move.move} onChange={(e) => this.handleInputChange(e)}/>
                            kills
                            <input name={"kills-"+index} value={move.kills} onChange={(e) => this.handleInputChange(e)}/>
                            <input type="button" className="submit-button" value="Delete" name={index}
                                   onClick={(e) => this.handleDelete(e)}/>
                        </div>
                    )
                })
        }

        return (
            <div className="configuration-container">
                {_moves}
                <input type="button" value="Add" className="submit-button" onClick={(e) => this.handleAdd(e)}/>
                <input type="submit" value="Save" className="submit-button" onClick={(e) => this.handleSubmit(e)}/>
            </div>
        )
    }

    componentWillMount() {
        this.setState({
            nextConfig: this.props.configuration
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            nextConfig: props.configuration
        })
    }

    handleInputChange(e) {
        e.preventDefault();
        let item = e.target.name.split("-");
        let nextMoves = this.state.nextConfig.map((move, index) => {
            if (index === parseInt(item[1])) {
                if (item[0] === "move"){
                    return Object.assign({}, move, {move: e.target.value})
                } else {
                    return Object.assign({}, move, {kills: e.target.value})
                }
            } else {
                return move
            }
        });
        this.setState({
            nextConfig: nextMoves
        })
    }

    handleAdd(e) {
        e.preventDefault();
        let _moves = this.state.nextConfig;
        _moves.push({
            move: "",
            kills: ""
        })
        this.setState({
            nextConfig: _moves
        })
    }

    handleDelete(e) {
        e.preventDefault();
        let _moves = this.state.nextConfig;
        _moves.splice(parseInt(e.target.name), 1);
        this.setState({
            nextConfig: _moves
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            configuration: this.state.nextConfig
        })
    }
}
