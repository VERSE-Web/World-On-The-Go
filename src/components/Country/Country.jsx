import React, { useState } from 'react';
import './country.css';


const Country = ({ country,handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // console.log(`Visited ${country.name.common}`);
        // if(visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className='country'>
        <h3>Name: {country.name.common}</h3>
            <img
                src={country.flags.flags.png}
                alt={country.flags.alt} 
            />
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'big country' : 'Small country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Mark as visited'}
            </button>
        </div>
    );
};

export default Country;
