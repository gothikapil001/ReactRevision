import React from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';


//for javascript 
// const heading1 = document.createElement("h1");
// heading1.innerHTML = "Hello world by JS";
// const root1 = document.getElementById("root1");
// root1.appendChild(heading1);

//For React

// const firstElement = document.createElement("div");
// firstElement.id = "root";
// document.body.appendChild(firstElement);

// const parent = React.createElement(
//     "div", { id: 'parent' },
//     [
//         React.createElement("div", { id: 'Child1' },
//             [
//                 React.createElement("h1", {}, "Hello Namste React Tutorial H1"),
//                 React.createElement("h2", {}, "Hello Namste React Tutorial H2")
//             ]
//         )
//     ]
// );

// // const heading = React.createElement("h1", {id:"headingReact"}, "Hello World By React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// This for create first div dynamically
const secondElement = document.createElement("Div");
secondElement.id = 'NewDiv';
document.body.appendChild(secondElement);

const ReactPracticeTag = [
    React.createElement("div", { id: 'parent1' },
        [
            React.createElement("div", { id: 'child1' },
                [
                    React.createElement("h5", {}, "Heading 1 for child 1 & Parent1  "),
                    React.createElement("h4", {}, "Heading 2 for child 1 & Parent1 "),
                ]
            )
        ]
    ),
    React.createElement("div", { id: 'parent2' },
        [
            React.createElement("div", { id: 'child1' },
                [
                    React.createElement("h5", {}, "Heading 1 for child 1 & Parent 2 "),
                    React.createElement("h4", {}, "Heading 2 for child 1 & Parent 2 "),
                ]
            )
        ]
    )

];

const rootElement = ReactDOM.createRoot(document.getElementById("NewDiv"));

rootElement.render(ReactPracticeTag);