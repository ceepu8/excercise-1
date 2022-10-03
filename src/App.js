import logo from "./logo.svg";
import "./App.css";
import CartComponents from "./components/CartComponents";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <CartComponents data={data}></CartComponents>
    </div>
  );
}

export default App;
