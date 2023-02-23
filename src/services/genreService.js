import {apiService} from "./apiService";
import {urls} from "../configs";

const genreService={
    getGenre:()=>apiService.get(urls.genres.genres)
}

export {
    genreService
}