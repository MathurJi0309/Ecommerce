import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = { productList: [] };

const productSlice = createSlice({
  name: "product2",
  initialState,
  reducers: {
    addProducts(state) {
      state.value++;
    },
    deleteProduct(state, action) {
      state.productList = state.productList.filter((item) => {
        return item.id !== action.payload.id;
      });
      
      toast.dark(`Product is deleted`,{
        position:"top-right",
    });

    },
    editProduct(state, action) {
      state.productList = state.productList.map((item) => {
        if (item.id === action.payload.id) {
          // return action.payload.product;
          return item = {
            id:action.payload.id,
            title:action.payload.title,
            thumbnail:action.payload.thumbnail,
            price:action.payload.price,
            description:action.payload.description
          }
        }
        return item;
      });
    },
    loadProducts(state, action) {
      state.productList = action.payload.productList;
    },
  },
});

export const { addProducts, deleteProduct, editProduct, loadProducts } =
  productSlice.actions;
export default productSlice.reducer;
