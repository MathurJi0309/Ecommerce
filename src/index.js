import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./Reducer/productSlice";
import { productsApi } from "./Reducer/productsApi";
import cartReducer, { getTotals } from "./Reducer/cartSlice";
import detailReducer from "./Reducer/detailSlice";
import filterReducer from "./Reducer/deleteSlice";
import product2Reducer from "./Reducer/product2Slice";


//-------------------------------------------------------create store----------------------------------------------------------------------


const store = configureStore({
  reducer: {

//-------------------------------------------------------all reducers----------------------------------------------------------------------


    products: productsReducer,
    cart: cartReducer,
    detail: detailReducer,
    filter: filterReducer,
    products2: product2Reducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});



//----------------------------------------disptch to fetch all the product in the store the product------------------------------------------------


store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
