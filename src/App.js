import CountryCard from "./Components/CountryCard";
import './App.css';
import { useEffect, useState } from "react";
import { getAllCountries } from "./Services";

function App() {
  const [countriesList, setCountriesList] = useState([])

  useEffect(() => {
    getAllCountries().then(result => {
      const countries = result.data;
      setCountriesList(countries);
    })

  }, []);
  return (
    <div className="App">
      <div className="country-card-wrapper">
        {
          countriesList.map(country => (
            <CountryCard
            name={country.name}
            capital={country.capital}
            population={country.population}
            flagURL={country.flag}
            key = {country.alpha3Code} 
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
