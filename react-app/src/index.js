import React from "react"
import  ReactDOM  from "react-dom"
import App from "./App"
import "./style.css"
function Temporary(){
    return(
        <div>
            <App />
        </div>
        
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));