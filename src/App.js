import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemProduct from './components/itemProduct/itemProduct';


function App() {
  return (
    <div className="App">
      <header>
   <NavBar />
   </header>
   <main>
    <h1>RACING STONES</h1>
   </main>
    </div>
  );
}

export default App;
