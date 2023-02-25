import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService, searchService} from "../../services";


const initialState = {
    movies: [],
    term: null,
    page: null,
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    })

const getSearch = createAsyncThunk(
    'movieSlice/getSearch',
    async ({term}, thunkAPI) => {
        try {
            const {data} = await searchService.getAll(term);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    })


const getDetails = createAsyncThunk(
    'movieSlice/getDetailsById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesService.getDetailsById(id)
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
                const {results} = action.payload
                state.movies = results

                state.loading = false

            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
                console.log("Rejected!");
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getSearch.fulfilled, (state, action) => {

                state.term = action.payload

            })

});

const {reducer: movieReducer} = movieSlice

const moviesActions = {
    getAll,
    getDetails,
    getSearch

}

export {
    movieReducer,
    moviesActions
}