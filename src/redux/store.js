import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}