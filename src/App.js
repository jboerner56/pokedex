import React from 'react';
import './App.css';
import PokeList from './containers/PokeListContainer';
// if styling needs to be worked on
// import PokeList from './'
function App() {
  return (
    <div className="App">
      <h1>PokeList</h1>
      <PokeList />
    </div>
  );
}

export default App;
