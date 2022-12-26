import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { loadProducts } from "../Reducer/product2Slice";
import Product from "./Product";

const ProductList = (props) => {
  const products = useSelector((state) => state.products2.productList);
  // const [isSorting, setSorting] = useState(false);
  console.log("a", products);
  const dispatch = useDispatch();
  console.log("a", products);
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
  }, []);
  const isLoading = false;
  // const { data, isLoading } = useGetAllProductsQuery();

  // const handleSort = () => {
  //   setSorting(!isSorting);
  //   productList?.sort((a, b) => a.price - b.price);
  //   toast.success(`Applied Low to High`);
  // };

  // const handleClose = () => {
  //   setSorting(!isSorting);
  //   productList?.sort((a, b) => a.id - b.id);
  //   toast.error(`Sorting Removed`);
  // };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
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
