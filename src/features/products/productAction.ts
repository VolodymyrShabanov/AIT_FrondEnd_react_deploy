import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import IProduct from "./types/Product"
import IProductCredentials from "./types/ProductCredentials"

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: number | undefined, thunkAPI) => {
    try {
      const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
      return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: IProductCredentials, thunkAPI) => {
    try {
      const res = await axios.post(`https://fakestoreapi.com/products/`, product)
      return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)
