import { configureStore } from "@reduxjs/toolkit"
import phimSlice from "features/Admin/Phim/phimSlice"

const rootReducer = {
    phims: phimSlice
}

const store = configureStore({
    reducer: rootReducer,
})

export default store