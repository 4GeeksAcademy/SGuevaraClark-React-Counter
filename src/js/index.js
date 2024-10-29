import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";  

const root = ReactDOM.createRoot(document.getElementById('app'));

let counter = 0;
setInterval(() => {
    root.render(<Home seconds={counter} />);
    counter++;
}, 1000);