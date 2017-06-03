import React, { Component } from 'react'

require('../styles/_ranking.scss')


export default class Ranking extends Component {

    render() {

        return (
            <div className="ranking-container">
                <textarea defaultValue={JSON.stringify(this.props.configuration)}
                          ref={(config) => this.config = config }
                          style={{width:'500px',height:'500px'}}
                />

                <input type="submit" value="Save" className="submit-button" onClick={(e) => this.handleSubmit(e)}/>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(JSON.parse(this.config.value))
    }
}
