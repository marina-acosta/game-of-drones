import React, { Component } from 'react'

require('../styles/_configuration.scss')


export default class Ranking extends Component {

    constructor() {
        super();
        this.state = {
            nextConfig: [],
            error: ""
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

        let _error = <div></div>;
        if (this.state.error) {
            _error = <div className="warning-class">
                {this.state.error}
            </div>
        }

        return (
            <div className="configuration-container">
                {_moves}
                {_error}
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
            nextConfig: nextMoves,
            error: ""
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
            nextConfig: _moves,
            error: ""
        })
    }

    handleDelete(e) {
        e.preventDefault();
        let _moves = this.state.nextConfig;
        _moves.splice(parseInt(e.target.name), 1);
        this.setState({
            nextConfig: _moves,
            error: ""
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.nextConfig.length >= 3 && this.checkNoEmptyValues()) {
            this.props.onSubmit({
                configuration: this.state.nextConfig
            })
        } else if (this.state.nextConfig.length < 3){
            this.setState({
                error: "If you are looking for a funny game ... you should configure at least 3 elements!"
            })
        } else {
            this.setState({
                error: "Ups! It looks like you are missing some values !!"
            })
        }
    }


    checkNoEmptyValues(){
        let ok = true;
        for (var i=0; i < this.state.nextConfig.length && ok; i++) {
            if (this.state.nextConfig[i].move === "" || this.state.nextConfig[i].kills === "") {
                ok = false;
            }
        }
        return ok;
    }
}
