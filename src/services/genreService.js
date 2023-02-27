import {apiService} from "./apiService";
import {urls} from "../configs";

const genreService = {
    getAll: () => apiService.get(urls.genres),
    getGenreById: (id) => apiService.get(urls.genresById(id))
}

export {
    genreService
}