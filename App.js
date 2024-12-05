"use strict";
// const ROOT = document.querySelector("#root");
// const heading = document.createElement("h1");
// heading.innerHTML= "hello world from js.";
// ROOT.appendChild(heading);
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