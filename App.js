//for javascript 
const heading1 = document.createElement("h1");
heading1.innerHTML = "Hello world by JS";
const root1 = document.getElementById("root1");
root1.appendChild(heading1);

//For React

const firstElement= document.createElement("div");
firstElement.id ="root";
document.body.appendChild(firstElement);

const parent = React.createElement("div",{id:'parent'},React.createElement("div",{id:'Child'},React.createElement("h1",{},"Hello Namste React Tutorial")));

// const heading = React.createElement("h1", {id:"headingReact"}, "Hello World By React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);