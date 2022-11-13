import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productItems: localStorage.getItem('productItems') ? JSON.parse(localStorage.getItem('productItems')) :  []
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action) => {
            const productIndex = state.productItems.findIndex(item => item.id === action.payload.id) 

            if(productIndex>=0){
               return
            }else{
            state.productItems.push(action.payload)
            localStorage.setItem('productItems',JSON.stringify(state.productItems))
            }
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer