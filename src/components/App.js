import React from 'react'
import Header from './Header'

const App = (props) => (
    <div className="app-container">
        <Header />
        {props.children}
    </div>
)

export default App

