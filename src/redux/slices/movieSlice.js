import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService, moviesService} from "../../services";


const initialState = {
    movies: [],
    genres:[],
    page: null,
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

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getGenre();
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
                const {page, results} = action.payload
                state.movies = results
                state.page = page
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })


});

const {reducer: movieReducer} = movieSlice

const moviesActions = {
    getAll,
    getDetails,
    getAllGenres

}

export {
    movieReducer,
    moviesActions
}