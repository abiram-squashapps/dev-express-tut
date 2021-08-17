import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import service from "./data";
import "primeflex/primeflex.css";

function Primeng() {
  const suggestion = service.getCountries();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectesdCountry, setSelectedCountry] = useState("");

  const searchCountry = (event) => {
    let filteredCountries = suggestion.filter((item) =>
      item.toLowerCase().includes(selectesdCountry.toLowerCase())
    );
    setFilteredCountries(filteredCountries); //suggestions
  };

  return (
    <div className="center">
      <h5>custom form with seperate components</h5>
      <div className=" p-fluid p-formgrid ">
        {/* <h1 className="p-display-block">Autocomplete in PrimeNd-React</h1> */}
        <div className="p-field p-grid">
          <label htmlFor="autocomplete" className="p-col">
            autocomplete countries
          </label>
          <AutoComplete
            className="p-col"
            id="autocomplete"
            suggestions={filteredCountries}
            value={selectesdCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
            completeMethod={searchCountry}
          />
        </div>
        <div className="p-field p-grid">
          <label htmlFor="autocomplete1" className="p-col">
            autocomplete dropdown
          </label>
          <AutoComplete
            id="autocomplete1"
            className="p-col"
            dropdown
            suggestions={filteredCountries}
            value={selectesdCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
            completeMethod={searchCountry}
          />
        </div>
      </div>
    </div>
  );
}

export default Primeng;
