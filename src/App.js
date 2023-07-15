import CountryCard from "./Components/CountryCard";

function App() {
  return (
    <div className="App">
      <CountryCard
        name={'Germany'}
        capital={'Berlin'}
        population={80_000_000} />
      
      <CountryCard
        name={'France'}
        capital={'Paris'}
        population={60_000_000} />
    </div>
  );
}

export default App;
