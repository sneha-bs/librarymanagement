import "./App.css";
import Search from "./components/search";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Route as Router } from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <p>Search Books </p>
      <Search />
    </div>
  );
}

export default App;
