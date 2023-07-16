import CountryCard from "./Components/CountryCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="country-card-wrapper">
        <CountryCard
          name={'Germany'}
          capital={'Berlin'}
          population={80_000_000}
          flagURL={'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'} />

        <CountryCard
          name={'France'}
          capital={'Paris'}
          population={60_000_000}
          flagURL={'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'} />
      </div>
    </div>
  );
}

export default App;
