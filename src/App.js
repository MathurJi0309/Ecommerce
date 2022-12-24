import React from "react";
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import "./Components/style.css"
import Page404 from "./Components/Page404";
function App() {


  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<Page404/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
