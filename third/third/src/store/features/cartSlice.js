import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartNumber: 0
    },
    reducers: {
        increment : state => {
            state.cartNumber += 1
        },
        clearCart : state => {
            state.cartNumber = 0
        }
    }
})

export const {increment, clearCart} = cartSlice.actions
export default cartSlice.reducer