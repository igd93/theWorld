import CountryCard from "../Components/CountryCard";
import './Home.css';
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services";
import { Link } from "react-router-dom";

function Home() {
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
            <Link to={`/countries/${country.alpha3Code}`}
              key={country.alpha3Code}
              style={{ textDecoration: 'none' }}>
              <CountryCard
                name={country.name}
                capital={country.capital}
                population={country.population}
                flagURL={country.flag}
                key={country.alpha3Code}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
