import React, {useState, useEffect} from 'react';



function App() {
  const [pokemons, setPokemons] = useState([]);

useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const renderPokemons = pokemons.map((x, index) => (
    <div key={index}>
      <p>{x.name}</p>
    </div>
  ));
  return <div>{renderPokemons}</div>;
}

export default App