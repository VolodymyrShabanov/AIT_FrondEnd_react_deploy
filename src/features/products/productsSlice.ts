import { createSlice } from "@reduxjs/toolkit"
import productState from "./types/productState"
import { addProduct, deleteProduct, loadProducts } from "./productAction"

const initial: productState = {
  products: [],
  isLoading: false,
  error: null,
  favorites: [],
}

export const productSlice = createSlice({
  name: "products",
  initialState: initial,
  reducers: {
    toggleFavorites: (state, action) => {
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
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (el) => el.id !== action.payload.id,
        )
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload)
      })
  },
})

export const { toggleFavorites } = productSlice.actions
