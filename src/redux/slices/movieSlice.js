import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movie: [],
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll();
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    })

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.movies=action.payload
            })
});

const {reducer: movieReducer} = movieSlice

const moviesActions = {
    getAll
}

export {
    movieReducer,
    moviesActions
}