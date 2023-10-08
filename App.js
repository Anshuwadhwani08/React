const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World frpm React"
);

console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);  //renders object in root div
