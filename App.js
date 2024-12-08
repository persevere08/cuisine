"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
const ROOT = ReactDOM.createRoot(
    document.getElementById("root")
);

const Heading = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "p",
        {},
        "para1"
    ),
    React.createElement(
        "p",
        {},
        "para2"
    )]
);
ROOT.render(Heading);