import './App.css';
import NavBar from './components/navBar/NavBar';
import itemProduct from './components/itemProduct/itemProduct';


function App() {
  return (
    <div className="App">
      <header>
   <NavBar />
   <itemProduct title="producto1" price="100000"  />
        <itemProduct />
        <itemProduct />
        <itemProduct />
        <itemProduct />
        <itemProduct />


   </header>
    </div>
  );
}

export default App;
