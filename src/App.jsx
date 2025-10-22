import "./App.css";
import GroceriesApp from "./Components/GroceriesApp";
import data from "./data/products";

function App() {
  return (
    <GroceriesApp data = {data}/>
  );
}

export default App;
