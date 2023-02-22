import axios from "axios";

import {baseURL} from "../configs";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjgxZGUzZjU1OGMwOGUwZTdjMjE3NGRkNjY0OTYwYyIsInN1YiI6IjYzZjI4YzI1MTUzNzZjMDA5NWIxZjM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boaimeKd66r5m4Q6M2nupk1d0XV1n6UYwT3XOjnkFxQ'
    return config
})

export {
    apiService
}