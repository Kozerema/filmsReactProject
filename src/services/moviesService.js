import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService={
    getAll:()=>apiService.get(urls.movies.movies)
}

export {
    moviesService
}