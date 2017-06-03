import React, { Component } from 'react'
import { browserHistory } from 'react-router'

require('../styles/_header.scss')

export default class Header extends Component {
    render(){
        return (
            <div className="header-container">
                <div className="links-container">
                    <div onClick={(e) => this.goToPath("/ranking")}> {"Ranking"} </div>
                    <div onClick={(e) => this.goToPath("/configuration")}> {"Configuration"} </div>
                    <div onClick={(e) => this.goToPath("/game")}> {"Play!"} </div>
                </div>
                <div className="title">
                    {"Game of Drones"}
                </div>
            </div>
        )
    }

    goToPath(path) {
        browserHistory.push(path)
    }

}
