import React from "react";

const Greeter = (props) => {
    return (
        <div className="card">
            <header className="card-body">
                {props.phrase}, {props.name}!
            </header>
        </div>
    )
}

export default Greeter;