import React from "react";
import SimpleCounter from "./SimpleCounter";

function App() {
    const counter = Math.floor(Date.now() / 1000);
    
    const calculateSeconds = (aCounter, placeValue) => {
        return Math.floor(aCounter/placeValue) % 10;
    };

    return (
        <SimpleCounter
            thousandsDigit={calculateSeconds(counter, 1000)}
            hundredsDigit={calculateSeconds(counter, 100)}
            tensDigit={calculateSeconds(counter, 10)}
            onesDigit={calculateSeconds(counter, 1)}
        />
    );
}

export default App;