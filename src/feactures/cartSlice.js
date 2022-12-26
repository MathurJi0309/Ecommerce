import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,

};

const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex=state.cartItems.findIndex(
                (item)=>item.id===action.payload.id
                );
                if(itemIndex>=0){
                    state.cartItems[itemIndex].cartTotalQuantity+=1;
                    
                    toast.info(`increased Product quantity ${state.cartItems[itemIndex].title}`,{
                        position:"top-right",
                    });
                }else{
                    const tempProduct={...action.payload,cartTotalQuantity:1};
                    state.cartItems.push(tempProduct);
                    toast.success(`Add ${action.payload.title} to cart`,{
                        position:"top-right",
                    });
                }
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
            const nextCartItems=state.cartItems.filter(
                (cartItem)=>
                    cartItem.id!==action.payload.id
            )
            state.cartItems=nextCartItems
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            toast.error(`${action.payload.title} remove from cart`,{
                position:"top-right",
            })
        },
        decreaseCart(state,action){
            const itemIndex=state.cartItems.findIndex(
                (cartItem)=>cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartTotalQuantity>1){
                state.cartItems[itemIndex].cartTotalQuantity-=1
                toast.info(`Decreased ${action.payload.title} cart quantity by one`,{
                    position:"top-right",
                })
            }
            else if(state.cartItems[itemIndex].cartTotalQuantity===1){
                const nextCartItems=state.cartItems.filter(
                    (cartItem)=>cartItem.id!==action.payload.id
                );
                state.cartItems=nextCartItems;
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
                toast.error(`${action.payload.title} removed from the cart`,{
                    position:"top-right"
                })
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        clearCart(state,action){
            state.cartItems=[]
            toast.error(`cart is emprty`,{
                position:"top-right",
            });
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        getTotals(state,action){
            let {total, quantity}=state.cartItems.reduce(
                (cartTotal,cartItem)=>{
                const{price,cartTotalQuantity} =cartItem;
                const itemTotal=price*cartTotalQuantity;

                cartTotal.total +=itemTotal
                cartTotal.quantity+=cartTotalQuantity

                return cartTotal;
            },{
                // intial value of cart
                total:0,
                quantity:0
            });
            state.cartTotalQuantity=quantity;
            state.cartTotalAmount=total;
        },
        // showDetail(state,action){
        //     const detailProduct={...action.payload};
        //     state.cartItems=[]
        //     state.cartItems.push(detailProduct);
        // },
        // removerDetail(state,action){
        //     state.cartItems=[]
        // }
    }, 
})

export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotals,deleteItem,showDetail,removerDetail} =cartSlice.actions;

export default cartSlice.reducer;