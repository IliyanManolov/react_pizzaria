import {Routes, Route } from 'react-router-dom';
import './App.css';
import CategoryList from './pages/CategoryList';
import Dish from './pages/Dish';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/category" element={<CategoryList/>}/>
        <Route path="/dish" element={<Dish/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    
  )
}

export default App;
