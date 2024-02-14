import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const loadUsers = createAsyncThunk(
  "users/loadUsers",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("https://reqres.in/api/users?page=1")
      return resp.data.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)
