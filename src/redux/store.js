import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";

const rootReducer=combineReducers({
    movie:movieReducer
});

const setUpStore=()=>configureStore({
    reducer:rootReducer
})

export {
    setUpStore
}