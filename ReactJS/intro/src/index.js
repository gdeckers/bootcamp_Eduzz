import React from "react";
import  ReactDOM  from "react-dom";
import Button from './Button'
import "./style.css"

function primeiroJSX(){
    return (
        <div className="teste">
            Oi do JSX!!
        </div>
    )
}

function App() {

    return (
        <div className="App">
            Hello world!
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
