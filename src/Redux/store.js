import {configureStore} from "@reduxjs/toolkit";
import membersReducer from "./membersSlice";
import themeReducer from "./themeSlice"

export const store = configureStore({
    reducer: {
        members : membersReducer,
        theme : themeReducer,
    }
})
