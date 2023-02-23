const baseURL='https://api.themoviedb.org/3'

const movies=`discover/movie?movie_id&page`

const genres=` /genres/get-movie-list`

const urls={
    movies:{
        movies,
        byId:(movie_id)=>`${movies}/${movie_id}`

    },
    genres:{
        genres

    }
}


export {
    baseURL,
    urls
}