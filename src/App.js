import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import ProductListing from './Pages/ProductListing';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductListing/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
