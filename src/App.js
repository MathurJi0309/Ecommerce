import React from "react";
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import "./Components/style.css"
import Page404 from "./Components/Page404";
import AddProduct from "./Components/AddProduct"
import Detail from "./Components/Detail";
function App() {


  return (
    <div className="App">
      <Router>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route excat path='/' element={<Home/>}/>
        <Route excat path='/cart' element={<Cart/>}/>
        <Route excat path='/addproduct' element={<AddProduct/>}/>
        <Route excat path='/detail' element={<Detail/>}/>
        <Route path='/*' element={<Page404/>}/>


      </Routes>
      </Router>
    </div>
  );
}

export default App;
