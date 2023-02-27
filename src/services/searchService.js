import {apiService} from "./apiService";
import {urls} from "../configs";

const searchService = {
    getAll: (query='term') => apiService.get(urls.search, {params:{query}})
}

export {
    searchService
}