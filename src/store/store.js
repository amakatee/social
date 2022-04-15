import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/Profile/PostSlice";
import ProductsReducer from "./features/Profile/ProductSlice"
import usersSlice from "./features/users/usersSlice";

const store = configureStore({
    reducer: {
        posts: PostReducer,
        products: ProductsReducer,
        users: usersSlice
    }
   
    
   

})

export default store