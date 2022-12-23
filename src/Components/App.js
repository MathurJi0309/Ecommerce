import React, { useEffect, useState } from "react";
import axios from "axios"

import CopyRight from "./CopyRight";
import Card from "./Card";

import Navbar from "./Navbar";


function App() {


  const[data,setData] =useState([]);

  // axios.get('https://dummyjson.com/products?limit=10')
  // .then((response) => {
  //   const list=response.data.products
  //   setData(list)
  //   console.log(list)
  //   // console.log(response.data);
  //   // console.log(response.status);
  //   // console.log(response.statusText);
  //   // console.log(response.headers);
  //   // console.log(response.config);
  // });

  // useEffect(() => {
    
  // },[]);

  const fetchURL = async () => {
      const response = await axios.get(`https://dummyjson.com/products?limit=10`);
      const list=response.data.products
    setData(list)
    console.log(list)
  };

  useEffect(() => {
    fetchURL();
  }, []);


  return (
    <div className="App">
      <img className="wallpaper" src="https://www.moengage.com/wp-content/uploads/2020/07/5-E-commerce-Technology-Trends-That-Will-Shape-The-Future-1.jpg"/>
      < Navbar />
      {data.map(product => (
            <Card img={product.thumbnail} 
            barnd={product.brand}  
            title={product.title}  
            price={product.price} 
            dis={product.description} />
          ))} 
      <CopyRight/>
    </div>
  );
}

export default App;
