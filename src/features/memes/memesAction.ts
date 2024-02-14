import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadMemes = createAsyncThunk(
    "memes/loadMemes",
    async (_, thunkAPI) => {

        try {
            const res = await axios.get("https://api.imgflip.com/get_memes")
            return res.data.data.memes
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


