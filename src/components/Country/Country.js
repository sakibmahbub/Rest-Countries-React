import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <h2>Country Name: {props.name}</h2>
      <h4>Area : {props.area}</h4>
      <h4>Population: {props.population}</h4>
    </div>
  );
};

export default Country;
