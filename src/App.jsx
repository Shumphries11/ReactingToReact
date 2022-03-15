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
        if(loaded === false) {
           setLoaded(true); 
        } else {
            setLoaded(false);
        }
        
    }

    if (loaded === false) {
        return (
            <div>
                <header>
                    Website is Loading...

                </header>
                <button onClick={handleButtonClick}>
                    Click Me
                </button>
            </div>
        )

    }



    return (
        <>
            <h1> <Greeter phrase="Hello There" name="Luke" /> </h1>
            <h1> <Greeter phrase="What's up" name="Bob" /> </h1>
            <h1> <Greeter phrase="How's it hanging" name="James" /> </h1>

            <input value={username} onChange={e => setUsername(e.target.value)} />


            <p>You are logging in as username: {username}</p>

            <button onClick={handleButtonClick}>
                Click Me
            </button>

        </>
    )

}


export default App;