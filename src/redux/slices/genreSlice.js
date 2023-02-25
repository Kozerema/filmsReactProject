import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genres: [],
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll();
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    })


const getGenreById = createAsyncThunk(
    'genreSlice/getGenreById',
    async ({genre_id}, thunkAPI) => {
        try {
            const {data} = await genreService.getGenreById(genre_id)
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    })


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                // state.genres = action.payload
                const [genres] = action.payload
                state.movies = genres

            })

            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })


            .addCase(getGenreById.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload
            })
    // .addCase(getAll.rejected, (state, action) => {
    //     state.loading = false
    //     state.errors = action.payload
    // })
    // .addCase(getAll.pending, (state, action) => {
    //     state.loading = true
    // })


});


const {reducer: genreReducer} = genreSlice

const genreActions = {
    getGenreById,
    getAll
}

export {
    genreActions,
    genreReducer
}