import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state,action) => {
      state.products = [...state.products,...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { getProduct } = productSlice.actions

export default productSlice.reducer