import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadShop = createAsyncThunk(
    "shop/loadShop",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            return res.data.products
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
)