import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PhimApi from "api/phimApi";

export const getPhim = createAsyncThunk('phim/getPhim', async () => {
    const phims = await PhimApi.getAllPhim();
    return phims;
});

const phimSlice = createSlice({
    name: "phims",
    initialState: {
        current: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        
    },
    extraReducers: {
        [getPhim.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getPhim.fulfilled]: (state, action) => {
            state.current = action.payload;
            state.isLoading = false;
        },
        [getPhim.rejected]: (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        },
    }
})


export default phimSlice.reducer;