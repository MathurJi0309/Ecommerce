import { useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import { addToCart } from "../feactures/cartSlice";
import {showDetail} from "../feactures/detailSlice";
import { useGetAllProductsQuery } from "../feactures/productsApi";
import { deletePro } from "../feactures/deleteSlice";
import { useEffect } from "react";
import { addallproduct } from "../feactures/deleteSlice";

const Home = () => {
    const filter = useSelector((state) => state.filter);
    const {data,isLoading}= useGetAllProductsQuery();
    const dispatch=useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(addallproduct(data));
      },[dispatch]);

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        navigate("/cart");
    }

    const handleDelete=(product)=>{
        dispatch(deletePro(product))
    }

    const handledetail=(product)=>{
        dispatch(showDetail(product));
        navigate("/detail");
    }
    return (  

        <div className="home-container">
            {isLoading ? (
            <p>Loading...</p>
            ) :( 
            <>
            <h2>New Arrivals</h2>
            <div className="products">
                {data.products.map((product)=>(
                <div key={product.id} className="product">
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title} onClick={()=>handledetail(product)} />
                    <div className="details">
                        <span >{product.description}</span>
                        <span className="price">Rs.{product.price}</span>
                        </div>
                        <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
                        <div className="edit-delete">
                            <button >Edit</button>
                            <button onClick={()=>{handleDelete(product)}}>Delete</button>
                        </div>

                        
                </div>

                        
                       ) )}
            </div>
            </>
            )}
        </div>
    );
}
 
export default Home;