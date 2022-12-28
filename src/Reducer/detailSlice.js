import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState={
    detailpro:[],
};

const detailSlice =createSlice({
    name:"detail",
    initialState,
    reducers: {

//-------------------------------------------------------show product detail----------------------------------------------------------------------


            showDetail(state,action){
            const detailProduct={...action.payload};
            state.detailpro=[]
            state.detailpro.push(detailProduct);
            toast.info(`Here is the Detail of ${state.detailpro[0].title}`,{
                position:"top-right",
            });
        },
    },

});


export const {showDetail} =detailSlice.actions;
export default detailSlice.reducer;