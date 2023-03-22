import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  // Step 1: Set state
  const [countries, setCountries] = useState([]);
  // Step 2: Write effect
  useEffect(() => {
    // Step 3: Writing fetch here & setting loaded data
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Lets Travel Around The World!</h1>
    </div>
  );
}

export default App;
