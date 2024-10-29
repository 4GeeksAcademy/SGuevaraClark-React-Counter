import React from "react";
import SimpleCounter from "./SimpleCounter";

function App(props) {
    const calculateSeconds = (number, position) => {
        return Math.floor(number / position) % 10;
    };

    return (
        <SimpleCounter
            thousandsDigit={calculateSeconds(props.seconds, 1000)}
            hundredsDigit={calculateSeconds(props.seconds, 100)}
            tensDigit={calculateSeconds(props.seconds, 10)}
            onesDigit={calculateSeconds(props.seconds, 1)}
        />
    );
}

export default App;