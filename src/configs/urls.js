const baseURL = 'https://api.themoviedb.org/3'

const endUrl = 'api_key=9681de3f558c08e0e7c2174dd664960c&language=en-US'

const urls = {
    movies: `/discover/movie?${endUrl}`,
    movieById: (movie_id) => `movie/${movie_id}?${endUrl}`,

    genres: `/genre/movie/list?${endUrl}`,
    genresById: (genre_id) => `/discover/movie/with_genres=${genre_id}?&sort_by=release_date.desc&with_genres=${endUrl}`,

    search: (term) => `/search/movie/${endUrl}?term=${term}`

}


export {
    baseURL,
    urls
}