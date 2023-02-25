import {apiService} from "./apiService";
import {urls} from "../configs";

const searchService = {
    getAll: (term) => apiService.get(urls.search, term)
}

export {
    searchService
}