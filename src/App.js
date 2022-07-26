import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <header>
   <NavBar />
   
   </header>
   <main>
  <ItemCount />
   </main>
    </div>
  );
}

export default App;
