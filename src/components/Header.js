import React, { Component } from 'react'

require('../styles/_header.scss')

export default class Header extends Component {
    render(){
        return (
            <div className="header-container">
                {"Game of Drones"}
            </div>
        )
    }
}
