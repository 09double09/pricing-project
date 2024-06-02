import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DesignList from "./components/DesignList";
import ItemSearch from "./components/ItemSearch";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ItemSearch></ItemSearch>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
