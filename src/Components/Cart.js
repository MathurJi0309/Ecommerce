
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart, clearCart, decreaseCart, getTotals, removeFromCart} from "../Reducer/cartSlice"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()

   useEffect(()=>{
    dispatch(getTotals());
  },[cart,dispatch]);

  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
  }
  const handleDecreaseCart=(cartItem)=>{
    dispatch(decreaseCart(cartItem));
  }
  const handleIncreaseQuantity=(cartItem)=>{
    dispatch(addToCart(cartItem));
  }
  const handleclearCart=()=>{
    dispatch(clearCart());
  }

    //----------------------------------------------------ipnut for the add cart compononet-----------------------------------------------------


  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">

          {/* ---------------------------------------------------- dispatch is used to send the action-----------------------------------------------------             */}
           
           
           
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.thumbnail} alt={cartItem.title} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={()=>handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">Rs.{cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={()=>{handleDecreaseCart(cartItem)}}>
                      -
                    </button>
                    <div className="count">{cartItem.cartTotalQuantity}</div>
                    <button onClick={()=>handleIncreaseQuantity(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    Rs.{cartItem.price * cartItem.cartTotalQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={()=>handleclearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">Rs.{cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;