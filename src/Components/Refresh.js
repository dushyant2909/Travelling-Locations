import React from "react";
import './Refresh.css';

function Refresh(props) {
    function refreshHandler() {
        props.refreshHandler();
    }
    return (
        <div className="refresh-container">
            <h1>"No Cities Left"</h1>
            <button className="refresh" onClick={refreshHandler}>Refresh</button>
        </div>
    )
}

export default Refresh;