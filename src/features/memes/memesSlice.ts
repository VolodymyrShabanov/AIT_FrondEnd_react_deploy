import { createSlice } from "@reduxjs/toolkit"
import { loadMemes} from "./memesAction"
import MemesState from "./types/MemesState"

const initial: MemesState = {
    memes: [
      {
        id: "string",
        name: "string",
        url: "string",
        width: 0,
        height: 0,
        box_count: 0,
        captions: 0,
      },
    ],
  isLoading: false,
  error: null,
}

export const memesSlice = createSlice (
    {
        name: "memes",
        initialState: initial,
        reducers: {},

        extraReducers: (builder) => {
            builder
            .addCase(loadMemes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMemes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.memes = action.payload; 
            })
            .addCase(loadMemes.rejected, (state, action) => {
                state.isLoading = false;
                state.memes = [];
                state.error = String(action.payload);
            })

        }
    }
)