import React from "react";

const Greeter = (props) => {
    return (
        <div>
            <header>
                {props.phrase}, {props.name}!
            </header>
        </div>
    )
}

export default Greeter;