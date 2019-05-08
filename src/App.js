import React from 'react';
import './App.css';
import PokeList from './containers/PokeListContainer';
import VisibilityButton from './components/VisibilityButton';
// if styling needs to be worked on
// import PokeList from './'
function App() {
  return (
    <div className="App">
      <h1>PokeList</h1>
      <VisibilityButton/>
      <PokeList />
    </div>
  );
}

export default App;
