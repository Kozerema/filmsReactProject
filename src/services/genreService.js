import {apiService} from "./apiService";
import {urls} from "../configs";

const genreService = {
    getAll: () => apiService.get(urls.genres),
    getGenreById: (genre_id) => apiService.get(urls.genresById, genre_id)
}

export {
    genreService
}