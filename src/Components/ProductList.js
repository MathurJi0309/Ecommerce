import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import axios from "axios";
import { loadProducts } from "../Reducer/product2Slice";
import Product from "./Product";
import { toast } from "react-toastify";

const ProductList = (props) => {
  const products = useSelector((state) => state.products2.productList);
  // const [isSorting, setSorting] = useState(false);
  const[short,setShort]=useState(true)
  console.log("a", products);
  const dispatch = useDispatch();
  console.log("a", products);


// ------------------------------------------------------------useEffect for api call fetch------------------------------------------------------

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=20"
        );
        console.log("resp", response.data.products);
        dispatch(loadProducts({ productList: response.data.products }));
      } catch (error) {
        console.log(error);
      }
    })();
  },[]);
  const isLoading = false;
  // const { data, isLoading } = useGetAllProductsQuery();


// --------------------------------------------------------------handle Short--------------------------------------------------------------------

  const handleSort = () => {
    setShort(!short);
    toast.success(`Applied Low to High`);
    products?.sort((a, b) => a.price - b.price);

  };


// --------------------------------------------------------------handle Shortclose--------------------------------------------------------------------


  const handleClose = () => {
    setShort(!short);
    toast.error(`Sorting Removed`);
    products?.sort((a, b) => a.id - b.id);

  };


// --------------------------------------------------------------all product list--------------------------------------------------------------------


  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mainshort">
          <h2 className="newarrival">New Arrivals</h2>
          {short ? (<button className="shortbtn" onClick={()=>handleSort()}>Short</button>):(<button className="Nshortbtn" onClick={()=>handleClose()}>Short-X</button>)}
          </div>
          <div className="products">
            {products.map((product, index) => {
              return (
                <li className="listitem">
                  <Product key={index} product={product} />
                </li>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
