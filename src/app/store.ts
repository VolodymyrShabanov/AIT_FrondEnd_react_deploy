import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { productSlice } from "../features/products/productsSlice"
import { memesSlice } from "../features/memes/memesSlice"
import { usersSlice } from "../features/users/usersSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice.reducer,
    memes: memesSlice.reducer,
    users: usersSlice.reducer,
    
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
