import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    requestId:null,
    page:null,
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


const getDetails=createAsyncThunk(
    'movieSlice/getDetailsById',
    async (_,thunkAPI)=>{
        try {
            const {data} = await moviesService.getDetailsById()
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
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.page = page
            })
            // .addCase(getImage.fulfilled,(state,action)=>{
            //     state.requestId=action.payload
            // })
});

const {reducer: movieReducer} = movieSlice

const moviesActions = {
    getAll,
    getDetails
}

export {
    movieReducer,
    moviesActions
}