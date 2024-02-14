import { createSlice } from "@reduxjs/toolkit"
import Users from "./types/Users"
import { loadUsers } from "./usersAction"

const initialUsers: Users = {
  data: [
    {
      id: "string",
      email: "string",
      first_name: "string",
      last_name: "string",
      avatar: "string",
      isLoading: false,
      error: null,
    },
  ],
  isLoading: false,
  error: null,
}

export const usersSlice = createSlice(
{
    name: "users",
    initialState: initialUsers,
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(loadUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.data= [];
            state.error = action.payload as string;
        })
    }
})

