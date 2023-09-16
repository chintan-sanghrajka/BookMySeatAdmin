import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/homeSlice.js";
import userReducer from "./user/userSlice.js";
import categoryReducer from "./category/categorySlice.js";
import subCategoryReducer from "./subcategory/subcategorySlice.js";
import eventReducer from "./event/eventSlice.js";

const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    event: eventReducer,
  },
});

export default store;
