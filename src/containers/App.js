import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { loadGameConfiguration } from '../actions/gameConfiguration'

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Header />
                {this.props.children}
            </div>
        )
    }

    componentDidMount(){
        this.props.loadGameConfiguration()
    }
}
export default connect (
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            loadGameConfiguration: function () {
                dispatch(loadGameConfiguration())
            }
        }
    }
)(App)

