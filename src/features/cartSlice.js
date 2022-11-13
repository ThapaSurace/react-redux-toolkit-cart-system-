import { createSlice } from "@reduxjs/toolkit"
import {toast} from 'react-toastify'

const initialState = {
    items: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    totalItemQuantity:0,
    totalitemPrice:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const itemIndex = state.items.findIndex((item)=>item.id===action.payload.id)

           if(itemIndex>=0){
            state.items[itemIndex].quantity += 1
           }else{
            const temp = {...action.payload,quantity:1}
            state.items.push(temp)
           }
           localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        deleteCartItem: (state,action) =>{
            const newItems = state.items.filter((item)=> item.id !== action.payload.id)
            state.items = newItems
            localStorage.setItem('cartItems',JSON.stringify(state.items))
            toast.error('item removed from cart', {
                position: "bottom-left",
              });
        },
        decreaseCartItem:(state,action)=>{
            const itemIndex = state.items.findIndex((item)=>item.id===action.payload.id)
            if(state.items[itemIndex].quantity === 1){
                const nextItem = state.items.filter(item=>item.id!== action.payload.id)
                state.items = nextItem
            }else{
                state.items[itemIndex].quantity -= 1
            }
            localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        clearCart:(state)=>{
           const nextItem = state.items=([])
           state.items = nextItem
           localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        getTotals:(state,action)=>{
            //destructuring cartTotal values {total,quantity}
            //cartTotal = accumulator and cartItem= current value
            let{total,quantity} = state.items.reduce((cartTotal, cartItem)=>{
                //simply distructuring cartItem values
                const {price, quantity} = cartItem
                const itemTotal = price * quantity
                
                cartTotal.total += itemTotal

                cartTotal.quantity += quantity
     
                return cartTotal
           },{
             // initial values...
             //these value will be hold by cartTotal parameter
             total:0,
             quantity:0
           })
           state.totalItemQuantity = quantity
           state.totalitemPrice = total
        }
    }

})

export const {addToCart,deleteCartItem,clearCart,decreaseCartItem,getTotals} = cartSlice.actions

export default cartSlice.reducer