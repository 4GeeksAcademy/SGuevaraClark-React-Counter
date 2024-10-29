import React from "react";
import App from "./App";

const Home = (props) => {
    return (
        <div>
            <App seconds={props.seconds} />
            
        </div>
    );
};

export default Home;