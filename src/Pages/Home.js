import CountryCard from "../Components/CountryCard";
import './Home.css';
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function Home() {
  const [countriesList, setCountriesList] = useState([])
  const [region, setRegion] = useState('');
  const [countryName, setCountryName] = useState('');

  const handleRegionChange = (event) => {
    setRegion(event.target.value)
  }

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  }


  useEffect(() => {
    getAllCountries().then(result => {
      const countries = result.data;
      setCountriesList(countries);
    })

  }, []);
  return (
    <div className="App">
      <div className="filters-wrapper">
        <TextField
        id="outlined-basic" 
        label="Search by Name" 
        variant="outlined"
        onChange={handleCountryNameChange}
        value = {countryName} />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Filter by Region</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={region}
            label="Search By Region"
            onChange={handleRegionChange}
          >         
            <MenuItem value={'africa'}>Africa</MenuItem>
            <MenuItem value={'americas'}>Americas</MenuItem>
            <MenuItem value={'asia'}>Asia</MenuItem>
            <MenuItem value={'europe'}>Europe</MenuItem>
            <MenuItem value={'oceania'}>Oceania</MenuItem>
          </Select>
          
        </FormControl>        
      </div>
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
