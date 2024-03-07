import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Slices/AuthSilce';


const store = configureStore({
    reducer: { auth : authSlice.reducer}
});

export default store;