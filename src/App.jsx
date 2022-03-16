import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {

    const [username, setUsername] = useState('');

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [loaded])

    const handleButtonClick = () => {
        setLoaded(true);
    }

    if (loaded === false) {
        return (
            <div>
                <header>
                    <h1>Website is Loading...</h1>
                </header>

                <button className="btn btn-outline-primary btn-lg" onClick={handleButtonClick}>
                    Click Here to Load
                </button>
            </div>
        )

    }



    return (
        <>
            <h1> <Greeter phrase="Hello There" name="Luke" /> </h1>
            <h1> <Greeter phrase="What's up" name="Bob" /> </h1>
            <h1> <Greeter phrase="How's it hanging" name="James" /> </h1>

            <input className="mt-3" value={username} onChange={e => setUsername(e.target.value)} />


            <p className="mt-3">You are logging in as username: <span className="text-danger">{username}</span></p>

        </>
    )

}


export default App;