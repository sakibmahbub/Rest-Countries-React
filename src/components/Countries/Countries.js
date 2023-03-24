import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  // Step 1: Set state
  const [countries, setCountries] = useState([]);
  // Step 2: Write effect
  useEffect(() => {
    // Step 3: Writing fetch here & setting loaded data
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Lets Travel Around The World!</h1>
      <h3>Available Countries : {countries.length}</h3>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
