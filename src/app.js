import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   return (
//     <div>
//       <h1>Adopt Me!</h1>
//       <Pet name="Finn" animal="Dog" breed="Border Collie" />
//       <Pet name="Estelle" animal="Bird" breed="Cockatiel" />
//       <Pet name="Cleo" animal="Fish" breed="Oscar" />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
