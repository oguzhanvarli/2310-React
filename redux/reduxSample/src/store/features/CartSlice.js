import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartNumber : 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        arttir : (state) => {
            state.cartNumber += 1
        }
    }

})

export const {arttir} = cartSlice.actions

export default cartSlice.reducer
