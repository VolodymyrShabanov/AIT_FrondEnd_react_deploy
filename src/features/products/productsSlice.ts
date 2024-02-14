import { createSlice } from "@reduxjs/toolkit";
import productState from "./types/productState";
import { addProduct, deleteProduct, loadProducts } from "./productAction";



const initial: productState = {
    products: [],
    isLoading: false,
    error: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initial,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.error = action.payload as string;
            })

            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(el => el.id !== action.payload.id);
            })

            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.unshift(action.payload);
            })
    }
    
})