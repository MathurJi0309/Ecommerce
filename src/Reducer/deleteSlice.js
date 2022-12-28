

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const initialState={
    filterpro:[],
};




const filterSlice =createSlice({
    name:"filter",
    initialState,
    reducers: {

//-------------------------------------------------------add the product----------------------------------------------------------------------


            addallproduct(state,action){
                console.log("product",action.payload.products)
                let p=action.payload
                Object.keys(p).forEach(function(key) {
                    state.filterpro.push(p[key]);
                  })
            },

//-------------------------------------------------------delete the product----------------------------------------------------------------------


            deletePro(state,action){
                const nextCartItems=state.cartItems.filter(
                    (cartItem)=>
                        cartItem.id!==action.payload.id
                )
                state.cartItems=nextCartItems
            toast.info(`Here is the Detail of ${state.detailpro[0].title}`,{
                position:"top-right",
            });
        },
    },

});


export const {deletePro, addallproduct} =filterSlice.actions;
export default filterSlice.reducer;