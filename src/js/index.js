// index.js (in root folder)
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/Home.jsx";

// Create root once
const root = ReactDOM.createRoot(document.getElementById('app'));

// Update every second
setInterval(() => {
    root.render(<Home />);
}, 1000);