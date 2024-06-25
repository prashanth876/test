import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Slices/States/counterSlice"
import  userReducer  from '../Slices/States/userSlice';
import { postApi } from '../Slices/Api/postSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user:userReducer,
        [postApi.reducerPath]:postApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
    
});
