import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Finnpn",
      animal: "Dog",
      breed: "Border Collie",
    }),
    React.createElement(Pet, {
      name: "Estelle",
      animal: "Bird",
      breed: "Parotkeet",
    }),
    React.createElement(Pet, { name: "Cleo", animal: "Fish", breed: "Oscar" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
