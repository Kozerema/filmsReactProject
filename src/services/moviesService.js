import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService={
    getAll:(page=1)=>apiService.get(urls.movies.movies, {params:{page}}),
    getDetailsById:(id)=>apiService.get(urls.movies.ById, id)
}

export {
    moviesService
}