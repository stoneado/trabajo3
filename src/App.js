import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';
import NavBar from './components/navBar/NavBar';

import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
   <NavBar />
   
   </header>
   <section className='main-container'>
<ItemListContainer />
 

  
   </section>
    </div>
  );
}

export default App;
