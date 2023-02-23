import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService={
    getAll:()=>apiService.get(urls.movies.movies),
    getDetailsById:(id,data)=>apiService.get(urls.movies.byId(id),data)


}

export {
    moviesService
}