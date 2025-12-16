import React, { use, useState } from "react";
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log('handles visited countries', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <p>Total countries Visited: {visitedCountries.length}</p>
      <ol>
        {
          visitedCountries.map(country => <li
          key={country.cca3.cca3}
          >{country.name.common}</li>)
        }
      </ol>
      <div id='countries'>
        {countries.map(country => <Country 
        key={country.cca3.cca3}
        handleVisitedCountries={handleVisitedCountries}
        country={country}></Country>)}
      </div>
    </div>
  );
};

export default Countries;
