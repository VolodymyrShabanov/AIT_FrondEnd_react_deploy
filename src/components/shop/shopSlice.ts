import { createSlice } from "@reduxjs/toolkit";

import { build } from "vite";
import { loadShop } from "./shopAction";
import IShopState from "./types/ShopState";


const initialState:IShopState = {
    products: [],
    isLoading: false,
    error: null,
    favorites: []
}

export const shopSlice = createSlice ( {
    name: "shop",
    initialState,
    reducers: {
        toggleFavoritesShop: (state, action) => {
            const id = action.payload
            const index = state.favorites.indexOf(id)
            if (index === -1) {
              state.favorites.push(id)
            } else {
              state.favorites.splice(index, 1)
            }
          },

    },

    extraReducers: (builder) => {
        builder 
        .addCase(loadShop.pending, (state) => {
        state.isLoading = true;
        })
        .addCase(loadShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        })
        .addCase(loadShop.rejected, (state, action) => {
        state.isLoading = false;
        state.products= [];
        state.error = action.payload as string;
        })
    }
})

export const { toggleFavoritesShop } = shopSlice.actions
